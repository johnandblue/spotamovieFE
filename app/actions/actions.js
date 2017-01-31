import { CALL_API } from '../lib/api'
import config from '../../config';
export const ADD_MOVIES = 'addMovies';

export const addMovies = (movies) => ({
  serverRoute: 'tmdb',
  type: 'ADD_MOVIES',
  movies
})

export const seen = (id) => ({
  serverRoute: 'tmdb',
  type: 'SEEN_MOVIE',
  id
})

export const getMovies = () => ({
  type: 'GET_MOVIES',
  [CALL_API] : {
    serverRoute: 'tmdb',
    endpoint: '/discover',
    method: 'GET'
  }
})


export const login = (code) => ({
  type: 'LOGIN',
  [CALL_API] : {
    serverRoute: 'spotify',
    endpoint: '/login',
    method: 'POST',
    data: {
      grant_type : "authorization_code",
      code : code,
      redirect_uri: config.redirect_uri,
      client_id:config.client_id
    }
  }
})
