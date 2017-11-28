import {
  FETCH_TODO,
  RECEIVE_TODO,
  FETCH_TODOS,
  RECEIVE_TODOS
} from '../constants/actionTypes'
import api from '../lib/api'

const fetchToDo = (value = true) => ({
  type: FETCH_TODO,
  payload: value
})


const receiveToDo = data => ({
  type: RECEIVE_TODO,
  payload: data
})

export const getToDo = (id, options = {}) => {
  return (dispatch, getState) => {
    const toDo = getState().toDosReducer.toDo

    if ((!toDo.fetching && !toDo.received) || options.force) {
      dispatch(fetchToDo())

      api
        .get(`todos/${id}`)
        .then(res => {
          dispatch(receiveToDo(res.data))
        })
        .catch(err => {
          dispatch(fetchToDo(false))
        })
    }
  }
}

const fetchToDos = (value = true) => ({
  type: FETCH_TODOS,
  payload: value
})


const receiveToDos = data => ({
  type: RECEIVE_TODOS,
  payload: data
})

export const getToDos = (options = {}) => {
  return (dispatch, getState) => {
    const toDos = getState().toDosReducer.toDos

    if ((!toDos.fetching && !toDos.received) || options.force) {
      dispatch(fetchToDos())

      api
        .get('todos')
        .then(res => {
          dispatch(receiveToDos(res.data))
        })
        .catch(err => {
          dispatch(fetchToDos(false))
        })
    }
  }
}