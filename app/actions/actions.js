export const SpotifySymbol = Symbol('Spotify')
export const TMDBSymbol    = Symbol('TMDB')
import config from '../../config';

export const getMoviesDiscover = () => ({
  type: 'GET_MOVIES_DISCOVER',
  [TMDBSymbol] : {
    endpoint: '/discover/movie',
    method: 'GET'
  }
})

export const getMovieFromId = (movieId) => ({
  type: 'GET_MOVIE',
  [TMDBSymbol] : {
    endpoint: `/movie/${movieId}`,
    method: 'GET'
  }
})

export const getMoviesSurvey = () => ({
  type: 'GET_MOVIES_SURVEY',
  [SpotifySymbol] : {
    endpoint: `/movies/survey`,
    method: 'GET',
  }
})


export const dislikeMovie = (movieId) => ({
  type: 'DISLIKE_MOVIE',
  [SpotifySymbol] : {
    endpoint: `/movies/${movieId}/dislike`,
    method: 'POST',
  }
})

export const likeMovie = (movieId) => ({
  type: 'LIKE_MOVIE',
  [SpotifySymbol] : {
    endpoint: `/movies/${movieId}/like`,
    method: 'POST',
    data: {
      movieId
    }
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
