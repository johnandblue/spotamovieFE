export const SpotifySymbol = 'apiSpotifySymbol';
export const TMDBSymbol    = 'apiTMDBSymbol';
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

export const getMovieRecommendation = () => ({
  type: 'GET_MOVIE_RECOMMENDATION',
  [SpotifySymbol] : {
    endpoint: `/movies/recommendation`,
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

export const getMoviesLiked = () => ({
  type: 'GET_MOVIES_LIKED',
  [SpotifySymbol] : {
    endpoint: `/movies/liked`,
    method: 'GET',
  }
})

export const getMoviesDisliked = () => ({
  type: 'GET_MOVIES_DISLIKED',
  [SpotifySymbol] : {
    endpoint: `/movies/disliked`,
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

export const unLikeMovie = (movieId) => ({
  type: 'UNLIKE_MOVIE',
  [SpotifySymbol] : {
    endpoint: `/movies/${movieId}/unlike`,
    method: 'POST',
  }
})

export const unDislikeMovie = (movieId) => ({
  type: 'UNDISLIKE_MOVIE',
  [SpotifySymbol] : {
    endpoint: `/movies/${movieId}/undislike`,
    method: 'POST',
  }
})

export const resetMovies = () => ({
  type: 'RESET_MOVIES'
})

export const logout = () => ({
  type: 'LOGOUT'
})

export const login = (code) => ({
  type: 'LOGIN',
  [SpotifySymbol] : {
    endpoint: '/login',
    method: 'POST',
    data: {
      code : code
    }
  }
})
