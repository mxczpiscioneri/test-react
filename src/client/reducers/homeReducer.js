import {
  FETCH_LETTERS_CREDIT_HOME,
  RECEIVE_LETTERS_CREDIT_HOME,
  FETCH_VEHICLES_HOME,
  RECEIVE_VEHICLES_HOME,
  FETCH_VIDEO,
  RECEIVE_VIDEO
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  lettersCredit: {
    fetching: false,
    received: true,
    content: []
  }, 
  vehicles: {
    fetching: false,
    received: true,
    content: []
  },
  video: {
    fetching: false,
    received: true,
    content: null
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LETTERS_CREDIT_HOME:
      return merge({}, state, {
        lettersCredit: {
          fetching: action.payload,
          received: !action.payload,
          content: []
        }
      })

    case RECEIVE_LETTERS_CREDIT_HOME:
      return merge({}, state, {
        lettersCredit: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    case FETCH_VEHICLES_HOME:
      return merge({}, state, {
        vehicles: {
          fetching: action.payload,
          received: !action.payload,
          content: []
        }
      })

    case RECEIVE_VEHICLES_HOME:
      return merge({}, state, {
        vehicles: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    case FETCH_VIDEO:
      return merge({}, state, {
         video: {
          fetching: action.payload,
          received: !action.payload,
          content: null
        }
      })

    case RECEIVE_VIDEO:
      return merge({}, state, {
        video: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    default:
      return state
  }
}