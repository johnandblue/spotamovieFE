export const ADD_MOVIES = 'addMovies';

// export const addMovies = (movies) => ({
//   type: 'ADD_MOVIES',
//   movies
// })

// export const seen = (id) => ({
//   type: 'SEEN_MOVIE',
//   id
// })

export const getMovies = (route) => ({
  type: 'GET_MOVIES',
  route
})

export const getMoviesPopular = () => {
  const data = fetchMoviePopular();
  return {
    type: GET_MOVIES_POPULAR,
    payload: data
  };
};
