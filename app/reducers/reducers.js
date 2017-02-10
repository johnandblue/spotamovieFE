import { combineReducers } from 'redux';

export const movies = (state = [], action) => {
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
        const movie = action.response;
        if (state.find(movie => movie.id === action.response.id)){
          return state.map(movie => {
            if (movie.id === action.response.id) {
              return parseMovie(action.response);
            }
            return movie;
          });
        }
        return [...state, parseMovie(action.response)]
      }
      return state;

    case 'RESET_MOVIES':
      console.log('Reset Movies Reducer');
      return [];


    case 'GET_MOVIE_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    default:
      return state;
  }
}

export const moviesSurvey = (state = [], action) => {
  switch (action.type) {

    case 'GET_MOVIES_SURVEY_SUCCESS':
      return action.response.movies;

    case 'GET_MOVIES_SURVEY_ERROR':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    case 'LIKE_MOVIE_SUCCESS':
    case 'LIKE_MOVIE_ERROR':
    default:
      return state;
  }
}

const moviesSkipped = (state = [], action) => {
  switch (action.type) {

    case 'SKIP_MOVIE':
    default:
      return state;
  }

}

export const moviesLiked = (state = [], action) => {
  switch (action.type) {

    case 'GET_MOVIES_LIKED_SUCCESS':
    return action.response.movies;

    case 'GET_MOVIES_LIKED_ERROR':
    default:
      return state;
  }
}
export const moviesDisliked = (state = [], action) => {
  switch (action.type) {

    case 'GET_MOVIES_DISLIKED_SUCCESS':
    return action.response.movies;

    case 'GET_MOVIES_DISLIKED_ERROR':
    default:
      return state;
  }
}

export const movieRecomm = (state = { movieId: undefined }, action) => {
  switch (action.type) {

    case 'GET_MOVIE_RECOMMENDATION_SUCCESS':
      return { movieId: action.response.movieId };

    case 'GET_MOVIE_RECOMMENDATION_FAILURE':
      console.log('ERROR IN REDUCERS:', action.error);
      return state;

    default:
      return state;
  }
}

export const user = (state = {...{loading: false}}, action) => {
  switch (action.type) {
    case 'LOADING':
      return {...{loading: true}}
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
    title: data.title,
    overview: data.overview,
    voteAverage: data.vote_average,
    genres: data.genres,
    releaseDate: data.release_date,
    backdropPath: data.backdrop_path
  }
}

export const parseMovies = (moviesArray) => {
  return moviesArray.map((movie) => parseMovie(movie));
}

export const parseMoviesSurvey = (moviesArray) => {
  return moviesArray.map((movie)=>(
    {
      movieSurveyId: movie,
    }
  ));
}

const reducers = combineReducers({
  movies, user, moviesSurvey, moviesLiked, moviesDisliked, movieRecomm, moviesSkipped

})

export default reducers
