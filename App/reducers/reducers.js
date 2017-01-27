import { combineReducers } from 'redux';

const events = (state = [], action) => {

  switch (action.type) {
    // case 'GET_EVENTS_REQUEST':
    // case 'CREATE_EVENT_REQUEST':
    //   return Object.assign({}, state, {loading: true})
    //   break;
    case 'GET_EVENTS_SUCCESS':
      // return Object.assign({}, state, {events: action.response})
      return [...action.response];
    // case 'GET_EVENTS_FAILURE':
    // case 'CREATE_EVENT_SUCCESS':
    //   return Object.assign({}, state, {loading: true})
    //   break;
    // case 'CREATE_EVENT_FAILURE':
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
      return {...action.response};
    case 'LOGOUT':
      return {};
    default:
  }
  return state;
}

const books = (state = [], action) => {
  switch (action.type) {
    case 'GET_BOOKS_SUCCESS':
      return [...action.response];
    case 'LOGOUT':
      return [];
    default:
  }
  return state;
}

const reducers = combineReducers({
  events, user, books

})

export default reducers
