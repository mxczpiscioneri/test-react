import {
  FETCH_BANNERS,
  RECEIVE_BANNERS
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  banners: {
    fetching: false,
    received: true,
    content: []
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return merge({}, state, {
        banners: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_BANNERS:
      return merge({}, state, {
        banners: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    default:
      return state
  }
}