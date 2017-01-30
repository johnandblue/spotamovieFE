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
  console.log('in login actions');
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


const mockServer = new Promise((resolve, reject) => {
  resolve({
    status: 200,
    json: () => {
      return new Promise((resolve, reject) => {
        resolve({
          name: 'Arol',
          auth_token: 'jd8393je03k390dkd9'
        })
      })
    }
  })
})
