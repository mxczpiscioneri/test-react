import {
  RECEIVE_SESSIONS_REDIRECT_URL,
  RESET_SESSIONS_REDIRECT_URL,
  FETCH_SESSIONS_AUTHENTICATE,
  RECEIVE_SESSIONS_AUTHENTICATE
} from '../constants/actionTypes'
import {
  createSessionReducer,
  authResource
} from '../lib/api'
import { push } from 'react-router-redux'
import {
  setAccessToken,
  keepLogged
} from '../services/authentication'

const fetchSessions = (value = true) => {
  return {
    type: FETCH_SESSIONS_AUTHENTICATE,
    payload: value
  }
}

const receiveSessions = value => {
  return {
    type: RECEIVE_SESSIONS_AUTHENTICATE,
    payload: value
  }
}

export const receiveSessionsRedirectUrl = url => ({
  type: RECEIVE_SESSIONS_REDIRECT_URL,
  payload: url
})

const resetSessionsRedirectUrl = () => ({
  type: RESET_SESSIONS_REDIRECT_URL
})

const redirect = () => {
  return (dispatch, getState) => {
    const redirectUrl = getState().sessionsReducer.redirectUrl.content

    dispatch(push(redirectUrl))
    dispatch(resetSessionsRedirectUrl())
  }
}

export const create = values => {
  return dispatch => {
    dispatch(fetchSessions())

    createSessionReducer(values)
      .then(res => {
        dispatch(login(res.data.data, values.keep))
      })
      .catch(err => {
        dispatch(fetchSessions(false))
      })
  }
}

export const login = (values, keep = true, shouldRedirect = true) => {
  keepLogged(keep)

  return [
    setAccessToken(values.token),
    receiveSessions(true),
    shouldRedirect && redirect()
  ]
}

export const logout = () => {
  return [
    setAccessToken(),
    receiveSessions(false)
  ]
}

export const authenticate = () => {
  const token = localStorage.accessToken

  return (dispatch, getState) => {
    const auth = getState().sessionsReducer.authenticate

    if ((!auth.received && !auth.fetching) || options.force) {
      if (token) {
        dispatch(fetchSessions())

        authResource({
          headers: { 'Authorization': token }
        })
          .then(res => {
            const data = res.data.data

            dispatch(login({
              user: data,
              token
            }, true, false))
          })
          .catch(err => {
            dispatch(fetchSessions(false))
            dispatch(logout())
          })
      } else  dispatch(logout())
    }
  }
}