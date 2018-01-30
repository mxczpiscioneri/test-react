import {
  FETCH_INTERESTED_RESULT,
  RECEIVE_INTERESTED_RESULT,
  RECEIVE_FORM_RESULT,
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  interested: {
    fetching: false,
    received: true,
    content: {}
  },
  form: {
    send: false,
    error: '',
    isSubmitting: false
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_INTERESTED_RESULT:
      return merge({}, state, {
        interested: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_INTERESTED_RESULT:
      return merge({}, state, {
        interested: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    case RECEIVE_FORM_RESULT:
      return merge({}, state, {
        form: {
          send: action.payload.send,
          error: action.payload.error,
          isSubmitting: action.payload.isSubmitting
        }
      })

    default:
      return state
  }
}