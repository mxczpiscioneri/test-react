import {
  FETCH_TESTIMONIALS,
  RECEIVE_TESTIMONIALS
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  testimonials: {
    fetching: false,
    received: true,
    content: []
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TESTIMONIALS:
      return merge({}, state, {
        testimonials: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_TESTIMONIALS:
      return merge({}, state, {
        testimonials: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    default:
      return state
  }
}