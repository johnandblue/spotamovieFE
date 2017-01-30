import { combineReducers } from 'redux';

const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return ({ ...state, ...action.movies });
    case 'SEEN_MOVIE':
      const newState = { ...state }
      newState[action.id] = Object.assign({}, newState[action.id], {
        seen: true
      });
      return newState;

    case 'GET_MOVIES_RECEIVED':
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
  movies,

})

export default reducers
