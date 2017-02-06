import * as ActionCreators from '../app/actions/actions'

describe('Action creators for SpotifySymbol', () => {
  it('getMovieRecommendation', () => {
    const expectedAction = {
      type: 'GET_MOVIE_RECOMMENDATION',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/recommendation`,
        method: 'GET'
      }
    }
    expect(ActionCreators.getMovieRecommendation()).toEqual(expectedAction);
  })
  it('getMoviesSurvey', () => {
    const expectedAction = {
      type: 'GET_MOVIES_SURVEY',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/survey`,
        method: 'GET'
      }
    }
    expect(ActionCreators.getMoviesSurvey()).toEqual(expectedAction);
  })
  it('getMoviesLiked', () => {
    const expectedAction = {
      type: 'GET_MOVIES_LIKED',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/liked`,
        method: 'GET'
      }
    }
    expect(ActionCreators.getMoviesLiked()).toEqual(expectedAction);
  })
  it('getMoviesDisliked', () => {
    const expectedAction = {
      type: 'GET_MOVIES_DISLIKED',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/disliked`,
        method: 'GET'
      }
    }
    expect(ActionCreators.getMoviesDisliked()).toEqual(expectedAction);
  })
  it('dislikeMovie', () => {
    const movieId = '11'
    const expectedAction = {
      type: 'DISLIKE_MOVIE',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/${movieId}/dislike`,
        method: 'POST'
      }
    }
    expect(ActionCreators.dislikeMovie(movieId)).toEqual(expectedAction);
  })
  it('likeMovie', () => {
    const movieId = '11'
    const expectedAction = {
      type: 'LIKE_MOVIE',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/${movieId}/like`,
        method: 'POST'
      }
    }
    expect(ActionCreators.likeMovie(movieId)).toEqual(expectedAction);
  })
  it('unLikeMovie', () => {
    const movieId = '11'
    const expectedAction = {
      type: 'UNLIKE_MOVIE',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/${movieId}/unlike`,
        method: 'POST'
      }
    }
    expect(ActionCreators.unLikeMovie(movieId)).toEqual(expectedAction);
  })
  it('unDislikeMovie', () => {
    const movieId = '11'
    const expectedAction = {
      type: 'UNDISLIKE_MOVIE',
      [ActionCreators.SpotifySymbol] : {
        endpoint: `/movies/${movieId}/undislike`,
        method: 'POST'
      }
    }
    expect(ActionCreators.unDislikeMovie(movieId)).toEqual(expectedAction);
  })
})

describe('Action creators for TMDB', () => {
  it('getMoviesDiscover', () => {
    const expectedAction = {
      type: 'GET_MOVIES_DISCOVER',
      [ActionCreators.TMDBSymbol] : {
        endpoint: '/discover/movie',
        method: 'GET'
      }
    }
    expect(ActionCreators.getMoviesDiscover()).toEqual(expectedAction);
  })
  it('getMovieFromId', () => {
    const movieId = '11'
    const expectedAction = {
      type: 'GET_MOVIE',
      [ActionCreators.TMDBSymbol] : {
        endpoint: `/movie/${movieId}`,
        method: 'GET'
      }
    }
    expect(ActionCreators.getMovieFromId(movieId)).toEqual(expectedAction);
  })
})

describe('Action creators for LOGIN', () => {
  it('login', () => {
    const code = 'fjdslfjsf9344282'
    const expectedAction = {
      type: 'LOGIN',
      [ActionCreators.SpotifySymbol] : {
        endpoint: '/login',
        method: 'POST',
        data: {
          code: code
        }
      }
    }
    expect(ActionCreators.login(code)).toEqual(expectedAction);
  })
})
