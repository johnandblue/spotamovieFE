import { CALL_API } from '../lib/api'

export const getEvents = () => ({
    type: 'GET_EVENTS',
    [CALL_API]: {
      endpoint: '/events'
    }
  })


export const createEvent = (title, details, date, time, image) => ({
  type: 'CREATE_EVENT',
  [CALL_API]: {
    endpoint: '/events',
    method: 'POST',
    data: {
      title,
      details,
      date,
      time,
      image
    },
  },
  success: getEvents
})

export const createBook = (name, email, rent, cert, eventId) => ({
  type: 'CREATE_BOOK',
  [CALL_API]: {
    endpoint: '/appointments',
    method: 'POST',
    data: {
      name,
      email,
      rent,
      cert,
      eventId
    },
  },
  success: getBooks
})

export const deleteAll = (data) => ({
  type: 'DELETE_ALL',
  [CALL_API]: {
    method: 'DELETE',
    endpoint: '/deleteAll'
  },
  success: getEvents
})

export const deleteEvent = (id) => ({
  type: 'DELETE_EVENT',
  [CALL_API]: {
    method: 'DELETE',
    endpoint: '/events/'+id
  },
  success: getEvents
})

export const deleteBook = (id) => ({
  type: 'DELETE_BOOK',
  [CALL_API]: {
    method: 'DELETE',
    endpoint: '/appointments/'+id
  },
  success: getBooks
})

export const getBooks = () => ({
    type: 'GET_BOOKS',
    [CALL_API]: {
      endpoint: '/appointments'
    }
  })


export const login = (username, password) => ({
  type: 'LOGIN',
  [CALL_API]: {
    endpoint: '/login',
    method: 'POST',
    username,
    password
  },
  success: getEvents
})

export const changeFlag = () => ({
  type: 'CHANGE_FLAG'
})
