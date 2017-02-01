import { combineReducers } from 'redux';

const movies = (state = [], action) => {
  switch (action.type) {

    case 'GET_MOVIES_DISCOVER_SUCCESS':
      if (action.response.results) {
        let parsedMovies = parseMovies(action.response.results);
        return parsedMovies;
      }
      return state;

    case 'GET_MOVIES_DISCOVER_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    case 'GET_MOVIE_SUCCESS':
      if (action.response) {
        return [...state, parseMovie(action.response)]
      }
      return state;

    case 'GET_MOVIE_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    default:
      return state;
  }
}

const moviesSurvey = (state = [], action) => {
  switch (action.type) {

    case 'GET_MOVIES_SURVEY_SUCCESS':
      console.log('action in reducer movie survey: ', action);
      return action.response.movies;

    case 'GET_MOVIES_SURVEY_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    case 'LIKE_MOVIE_SUCCESS':
      return state;

    case 'LIKE_MOVIE_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    default:
      return state;
  }
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

export const parseMovie = (data) => {
  return {
    seen: false,
    poster_path: data.poster_path,
    id: data.id,
    title: data.title
  }
}

export const parseMovies = (moviesArray) => {
  return moviesArray.map((movie) => parseMovies(movie));
}

export const parseMoviesSurvey = (moviesArray) => {
  return moviesArray.map((movie)=>(
    {
      movieSurveyId: movie,
    }
  ));
}

const reducers = combineReducers({
  movies, user, moviesSurvey

})

export default reducers
