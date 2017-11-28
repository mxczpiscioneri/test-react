import {
  FETCH_TODO,
  RECEIVE_TODO,
  FETCH_TODOS,
  RECEIVE_TODOS
} from '../constants/actionTypes'
import { merge } from 'lodash'
import {
  toDoMock,
  toDosMock
} from '../mocks/toDosMocks'

const INITIAL_STATE = {
  toDo: {
    fetching: false,
    received: true,
    content: {
      name: ''
    },
    ...toDoMock
  },
  toDos: {
    fetching: false,
    received: true,
    content: [],
    ...toDosMock
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_TODO:
      return merge({}, state, {
        toDo: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_TODO:
      return merge({}, state, {
        toDo: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    case FETCH_TODOS:
      return merge({}, state, {
        toDos: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_TODOS:
      return merge({}, state, {
        toDos: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    default:
      return state
  }
}