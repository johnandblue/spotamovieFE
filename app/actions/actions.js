import { CALL_API } from '../lib/api'
import config from '../../config';
export const ADD_MOVIES = 'addMovies';

export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
})

export const seen = (id) => ({
  type: 'SEEN_MOVIE',
  id
})

export const getMovies = (route) => ({
  type: 'GET_MOVIES',
  route
})


export const login = (code) => {
  return {
    type: 'LOGIN',
    [CALL_API] : {
      endpoint: '/login',
      method: 'POST',
      data: {
        grant_type : "authorization_code",
        code : code,
        redirect_uri: config.redirect_uri,
        client_id:config.client_id
      }
    }
  }
}
