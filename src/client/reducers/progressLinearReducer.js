import {
  RECEIVE_PROGRESS_LINEAR,
  UPDATE_PROGRESS_LINEAR,
  REMOVE_PROGRESS_LINEAR
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  content: {
    show: false,
    completed: 0
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_PROGRESS_LINEAR:
      return {
        content: {
          show: true,
          completed: 0
        }
      }

    case UPDATE_PROGRESS_LINEAR:
      return merge({}, state, {
        content: {
          completed: action.payload
        }
      })

    case REMOVE_PROGRESS_LINEAR:
      return {
        ...INITIAL_STATE
      }

    default:
      return state
  }
}
