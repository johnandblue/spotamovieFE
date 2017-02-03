import * as ActionCreators from '../app/actions/actions'
import reducer, { movies, moviesSurvey } from '../app/reducers/reducers'

const movieMock = {
  seen:false,
  poster_path: '/sjdfkjsiks.jpg',
  id: '1234',
  title: 'Lo que el viento se llevó'
}

const movieIdMocks = [1212334,42345345,52455]


describe('movies reducer', () => {
  it('should handle GET_MOVIES_DISCOVER_SUCCESS', () => {
    expect(movies([], {
      type: 'GET_MOVIES_DISCOVER_SUCCESS',
      response: {
        results: [movieMock]
      }
    })).toEqual([
      movieMock
    ])
  })

  it('should handle GET_MOVIE_SUCCESS', () => {
    expect(movies([], {
      type: 'GET_MOVIE_SUCCESS',
      response: movieMock
    })).toEqual(
       [movieMock]
    )
  })
  it('should handle GET_MOVIE_SUCCESS', () => {
    expect(movies(undefined, {
      type: 'GET_MOVIE_SUCCESS',
      response: movieMock
    })).toEqual(
       [movieMock]
    )
  })
  it('should handle GET_MOVIE_SUCCESS', () => {
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

  it('should handle GET_MOVIES_SURVEY_SUCCESS', () => {
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
