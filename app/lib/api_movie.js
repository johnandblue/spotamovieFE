export const apiGenerator = (dispatch) => (route, name) => {
  fetch(route)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: `${name}_RECEIVED`,
        data
      })
    })
    .catch((error) => {
      console.log('error in apiGenerator');
      return dispatch({
        type: `${name}_ERROR`,
        error
      })
    })
}

export const apiMiddleware = store => next => action => {
  const getApi = apiGenerator(store.dispatch)
  if (action.route) {
    console.log('action in middlew', action);
    getApi(action.route, action.type);
    return next({
      type: action.type,
      isLoading: true
    })
  }
  next(action);
}

export const fetchMovies = () => {
  return (dispatch) => {
    fetch('https://movied.herokuapp.com/discover')
      .then((response) => response.json())
      .then((movies) => {
        return parseMovies(movies);
      })
      .then((movies) => {
        dispatch(addMovies(movies))
      })
  }
}

export default apiMiddleware;
