import { combineReducers } from 'redux';

const movies = (state = [], action) => {
  switch (action.type) {

    case 'GET_MOVIES_SUCCESS':
      if (action.data) {
        let parsedMovies = parseMovies(action.data);
        // console.log('parsedMovies', parsedMovies);
        return parsedMovies;
      }
      return state;

    case 'GET_MOVIES_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    default:
      return state;
  }
}


const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...action.response};
    case 'LOGOUT':
      return {};
    default:
  }
  return state;
}


export const parseMovies = (moviesArray) => {
  return moviesArray.map((movie)=>(
    {
      seen: false,
      poster_path: movie.poster_path,
      id: movie.id,
      title: movie.title
    }
  ));
}

const reducers = combineReducers({
  movies, user

})

export default reducers
