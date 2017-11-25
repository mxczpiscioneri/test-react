import {
  RECEIVE_SESSIONS_REDIRECT_URL,
  RESET_SESSIONS_REDIRECT_URL,
  FETCH_SESSIONS_AUTHENTICATE,
  RECEIVE_SESSIONS_AUTHENTICATE
} from '../constants/actionTypes'
import { merge } from 'lodash'
import routePaths from '../constants/routes'

const INITIAL_STATE = {
  redirectUrl: {
    content: routePaths.path.profile
  },
  authenticate: {
    fetching: false,
    received: false,
    content: {
      isLogged: false
    }
  }
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SESSIONS_AUTHENTICATE:
      return merge({}, state, {
        authenticate: {
          fetching: action.payload,
          received: !action.payload,
          content: {
            isLogged: false
          }
        }
      })

    case RECEIVE_SESSIONS_AUTHENTICATE:
      return merge({}, state, {
        authenticate: {
          fetching: false,
          received: true,
          content: {
            isLogged: action.payload
          }
        }
      })

    case RECEIVE_SESSIONS_REDIRECT_URL:
      return merge({}, state, {
        redirectUrl: {
          content: action.payload
        }
      })

    case RESET_SESSIONS_REDIRECT_URL:
      return merge({}, state, {
        redirectUrl: INITIAL_STATE.redirectUrl
      })

    default:
      return state
  }
}