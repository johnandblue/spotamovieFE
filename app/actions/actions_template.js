// import { CALL_API } from '../lib/api'
//
// export const getMovies = () => ({
//     type: 'GET_MOVIES',
//     [CALL_API]: {
//       endpoint: '/movies'
//     }
//   })
//
//
// export const createMovie = (title, date, poster) => ({
//   type: 'CREATE_MOVIE',
//   [CALL_API]: {
//     endpoint: '/movies',
//     method: 'POST',
//     data: {
//       title,
//       date,
//       poster
//     },
//   },
//   success: getMovies
// })
//
// export const createSong = (title, artist) => ({
//   type: 'CREATE_SONG',
//   [CALL_API]: {
//     endpoint: '/songs',
//     method: 'POST',
//     data: {
//       title,
//       artist
//     },
//   },
//   success: getSongs
// })
//
// export const deleteAll = (data) => ({
//   type: 'DELETE_ALL',
//   [CALL_API]: {
//     method: 'DELETE',
//     endpoint: '/deleteAll'
//   },
//   success: getMovies
// })
//
// export const deleteMovie = (id) => ({
//   type: 'DELETE_MOVIE',
//   [CALL_API]: {
//     method: 'DELETE',
//     endpoint: '/movies/'+id
//   },
//   success: getMovies
// })
//
// export const deleteSong = (id) => ({
//   type: 'DELETE_SONG',
//   [CALL_API]: {
//     method: 'DELETE',
//     endpoint: '/songs/'+id
//   },
//   success: getSongs
// })
//
// export const getSongs = () => ({
//     type: 'GET_SONGS',
//     [CALL_API]: {
//       endpoint: '/songs'
//     }
//   })
//
//
// export const login = (username, password) => ({
//   type: 'LOGIN',
//   [CALL_API]: {
//     endpoint: '/login',
//     method: 'POST',
//     username,
//     password
//   },
//   success: getMovies
// })
//
// export const changeFlag = () => ({
//   type: 'CHANGE_FLAG'
// })
