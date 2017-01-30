const PATH_POPULAR = 'https://movied.herokuapp.com/popular';
const API_ROOT = 'http://localhost:8888'

const callApi = (serverRoute, endpoint, method='GET', data, authentication) => {
  console.log(serverRoute)

  const serverURL = (serverRoute) => {
    if (serverRoute === 'tmdb') return PATH_POPULAR
    if (serverRoute === 'spotify') return API_ROOT
  }

  console.log(serverURL)

  const fullUrl = (endpoint.indexOf(serverURL(serverRoute)) === -1) ? serverURL(serverRoute) + endpoint : endpoint

  let body
  if (data) {
    body = JSON.stringify(data)
  }

  return fetch(fullUrl, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': authentication
    }
  })
    .then(response =>
      response.json()
      .then(json => {
        if (!response.ok) {
          console.log('response rejected');
          return Promise.reject(json)
        }
        return json
      })
    )
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { serverRoute, endpoint, method, data } = callAPI
  const { type } = action

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  let authentication
  if (store.getState().user.token) {
    authentication = 'Bearer ' + store.getState().user.token
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  next(actionWith({ type: type + '_REQUEST' }))

  return callApi(serverRoute, endpoint, method, data, authentication)
    .then(
      response => {
        next(actionWith({
        response,
        type: type + '_SUCCESS'
      }))
      if (action.success) {
        store.dispatch(action.success())

      }
    }
    )
    .catch(
      error => next(actionWith({
        type: type + '_FAILURE',
        error: error.message || 'Something bad happened'
      }))
    )
}
