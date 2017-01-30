const API_ROOT = 'http://localhost:3001'

const callApi = (endpoint, method='GET', data, authentication) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

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

  let { endpoint, method, data, username, password } = callAPI
  const { type } = action

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }

  let authentication
  if (username && password) {
    authentication = 'Basic ' + btoa(`${username}:${password}`)
  } else if (store.getState().user.token) {
    authentication = 'Bearer ' + store.getState().user.token
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  next(actionWith({ type: type + '_REQUEST' }))

  return callApi(endpoint, method, data, authentication)
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
