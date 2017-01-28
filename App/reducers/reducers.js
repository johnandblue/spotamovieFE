import { combineReducers } from 'redux';

const movies = (state = [], action) => {

  switch (action.type) {
    // case 'GET_MOVIES_REQUEST':
    // case 'CREATE_MOVIE_REQUEST':
    //   return Object.assign({}, state, {loading: true})
    //   break;
    case 'GET_MOVIES_SUCCESS':
      // return Object.assign({}, state, {movies: action.response})
      return [...action.response];
    // case 'GET_MOVIES_FAILURE':
    // case 'CREATE_MOVIE_SUCCESS':
    //   return Object.assign({}, state, {loading: true})
    //   break;
    // case 'CREATE_MOVIE_FAILURE':
    //   return Object.assign({}, state)
    //   break;
    // case 'DELETE_ALL_REQUEST':
    // case 'DELETE_ALL_SUCCESS':
    // return Object.assign({}, state, {loading: true})
    // break;
    case 'LOGOUT':
      return [];
    default:

  }

  return state;
}

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.response;
    case 'LOGOUT':
      return {};
    default:
  }
  return state;
}

const songs = (state = [], action) => {
  switch (action.type) {
    case 'GET_SONGS_SUCCESS':
      return action.response;
    case 'LOGOUT':
      return [];
    default:
  }
  return state;
}

const flag = (state = true, action) => {
  switch (action.type) {
    case 'CHANGE_FLAG':
      console.log('in the reducer flag');
      return !state;
    default:
  }
  return state;
}

const reducers = combineReducers({
  movies, user, songs, flag

})

export default reducers
