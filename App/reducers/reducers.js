import { combineReducers } from 'redux';

const movies = (state = {}, action) => {
  switch (action.type) {
    // case 'ADD_MOVIES':
    //   return ({ ...state, ...action.movies });
    // case 'SEEN_MOVIE':
    //   const newState = { ...state }
    //   newState[action.id] = Object.assign({}, newState[action.id], {
    //     seen: true
    //   });
    //   return newState;

    // case 'GET_MOVIES_LOADING':
    //   if (action.isLoading) return ({ ...state, ...{isLoading: true}});
    //   return state;

    case 'GET_MOVIES_RECEIVED':
      if (action.data) {
        console.log('action.data:', action.data);
        let parsedMovies = parseMovies(action.data);
        console.log('parsedMovies', parsedMovies);
        return ({ ...state, ...parsedMovies });
      }
      return state;

    case 'GET_MOVIES_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    default:
      return state;
  }
}

// const user = (state = {}, action) => {
//   switch (action.type) {
//     case 'LOGIN_SUCCESS':
//       return {...action.response};
//     case 'LOGOUT':
//       return {};
//     default:
//   }
//   return state;
// }
// const songs = (state = [], action) => {
//   switch (action.type) {
//     case 'GET_SONGS_SUCCESS':
//       return [...action.response];
//     case 'LOGOUT':
//       return [];
//     default:
//   }
//   return state;
// }
// const flag = (state = true, action) => {
//   switch (action.type) {
//     case 'CHANGE_FLAG':
//       console.log('in the reducer flag');
//       return !state;
//     default:
//   }
//   return state;
// }

const reducers = combineReducers({
  movies,
  // user, songs, flag

})

export default reducers
