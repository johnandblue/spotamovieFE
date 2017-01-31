export const SpotifySymbol = Symbol('Spotify')
export const TMDBSymbol    = Symbol('TMDB')

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
  [TMDBSymbol] : {
    endpoint: '/discover/movie',
    method: 'GET'
  }
})


export const login = (code) => ({
  type: 'LOGIN',
  [SpotifySymbol] : {
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
