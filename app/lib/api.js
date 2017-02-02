// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.

export default (symbol, baseURL, endpointSuffix="") => {
  const callApi = (serverRoute, endpoint, method='GET', data, authentication) => {
    const fullUrl = baseURL + endpoint + endpointSuffix
    console.log(fullUrl);

    let body
    if (data) {
      console.log('data in body: ', data);
      body = JSON.stringify(data)
    }

    return fetch(fullUrl, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authentication
      }
    })
      .then(response =>{
        console.log(response);
        if (response.status !== 201) {
          return  response.json()
            .then(json => {
              console.log('json: ', json);
              if (!response.ok) {
                console.log('response rejected');
                return Promise.reject(json)
              }
              return json
            })
          }
        }
      )
      .catch(err => {
        console.error('ERROR in fetch', err);
        return Promise.reject(err)
      })
  }

  // Action key that carries API call info interpreted by this Redux middleware.
  return store => next => action => {
    const callAPI = action[symbol]
    if (typeof callAPI === 'undefined') {
      return next(action)
    }

    let { serverRoute, endpoint, method, data } = callAPI
    const { type } = action

    if (typeof endpoint !== 'string') {
      throw new Error('Specify a string endpoint URL.')
    }

    let authentication
    if (store.getState().user.userToken) {
      authentication = 'Bearer ' + store.getState().userToken
    }

    const actionWith = data => {
      const finalAction = Object.assign({}, action, data)
      delete finalAction[symbol]
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
}
