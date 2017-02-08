import * as ActionCreators from '../app/actions/actions'
import reducer, {
  movies,
  moviesSurvey,
  moviesLiked,
  moviesDisliked,
  movieRecomm,
  user
} from '../app/reducers/reducers'

const movieMock = {
  seen:false,
  poster_path: '/sjdfkjsiks.jpg',
  id: '1234',
  title: 'Lo que el viento se llevó'
}

const movieIdMocks = [1212334,42345345,52455]

const movieRecommMock = { movieId: 4324323 }

describe('Tests for reducer: movies', () => {

  it('should handle GET_MOVIES_DISCOVER when receiving movie object', () => {
    expect(movies([], {
      type: 'GET_MOVIES_DISCOVER_SUCCESS',
      response: {
        results: [movieMock]
      }
    })).toEqual([
      movieMock
    ])
  })

  it('should handle GET_MOVIE when receiving movie object', () => {
    expect(movies([], {
      type: 'GET_MOVIE_SUCCESS',
      response: movieMock
    })).toEqual(
       [movieMock]
    )
  })

  it('should handle GET_MOVIE when the initial state is undefined', () => {
    expect(movies(undefined, {
      type: 'GET_MOVIE_SUCCESS',
      response: movieMock
    })).toEqual(
       [movieMock]
    )
  })

  it('should handle GET_MOVIE when type does not match', () => {
    expect(movies([movieMock], {
      type: 'PEPITO_NO_EXISTE',
      response: movieMock
    })).toEqual(
       [movieMock]
    )
  })

  it('should update existing movies without creating a new record', () => {
    expect(movies([movieMock], {
      type: 'GET_MOVIE_SUCCESS',
      response: Object.assign({}, movieMock, {title: 'Hoho'})
    })).toEqual(
      [Object.assign({}, movieMock, {title: 'Hoho'})]
    )
  })

  it('should handle RESET_MOVIES returning an empty array', () => {
    expect(movies([movieMock], {
      type: 'RESET_MOVIES',
      response: movieMock
    })).toEqual(
      []
    )
  })
})


describe('Tests for reducer: moviesSurvey', () => {
  it('should handle GET_MOVIES_SURVEY when receiving movie object', () => {
    expect(moviesSurvey([], {
      type: 'GET_MOVIES_SURVEY_SUCCESS',
      response: {
        movies: [movieIdMocks]
      }
    })).toEqual([
      movieIdMocks
    ])
  })
})

describe('Tests for reducer: moviesLiked - moviesDisliked', () => {
  it('should handle GET_MOVIES_LIKED when receiving movie object', () => {
    expect(moviesLiked([], {
      type: 'GET_MOVIES_LIKED_SUCCESS',
      response: {
        movies: [movieIdMocks]
      }
    })).toEqual([
      movieIdMocks
    ])
  })

  it('should handle GET_MOVIES_DISLIKED when receiving movie object', () => {
    expect(moviesDisliked([], {
      type: 'GET_MOVIES_DISLIKED_SUCCESS',
      response: {
        movies: [movieIdMocks]
      }
    })).toEqual([
      movieIdMocks
    ])
  })
})

describe('Tests for reducer: movieRecomm', () => {
  it('should handle GET_MOVIE_RECOMMENDATION when receiving a movieId', () => {
    expect(movieRecomm({ movieId: undefined }, {
      type: 'GET_MOVIE_RECOMMENDATION_SUCCESS',
      response: movieRecommMock
    })).toEqual(
      movieRecommMock
    )
  })
})

describe('Tests for reducer: user', () => {
  it('should handle LOADING for state loading true', () => {
    expect(user({loading: false}, {
      type: 'LOADING',
      response: {loading: true}
    })).toEqual(
      {loading: true}
    )
  })
  it('should handle LOGIN when code is sent', () => {
    expect(user({}, {
      type: 'LOGIN_SUCCESS',
      response: {
        name:'Arol'
      }
    })).toEqual(
      {
        name:'Arol'
      }
    )
  })
})
