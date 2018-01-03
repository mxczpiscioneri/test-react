import {
  FETCH_LETTERS_CREDIT,
  RECEIVE_LETTERS_CREDIT,
  FETCH_LETTER_CREDIT_BY_ID,
  RECEIVE_LETTER_CREDIT_BY_ID
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  lettersCredit: {
    fetching: false,
    received: true,
    content: []
  },
  letterCredit: {
    fetching: false,
    received: true,
    content: {}
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LETTERS_CREDIT:
      return merge({}, state, {
        lettersCredit: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_LETTERS_CREDIT:
      return merge({}, state, {
        lettersCredit: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    case FETCH_LETTER_CREDIT_BY_ID:
      return merge({}, state, {
        letterCredit: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_LETTER_CREDIT_BY_ID:
      return merge({}, state, {
        letterCredit: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    default:
      return state
  }
}