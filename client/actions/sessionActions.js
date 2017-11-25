import {
  RECEIVE_SESSIONS_REDIRECT_URL,
  RESET_SESSIONS_REDIRECT_URL,
  FETCH_SESSIONS_AUTHENTICATE,
  RECEIVE_SESSIONS_AUTHENTICATE
} from '../constants/actionTypes'
import api from '../lib/api'
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
    const redirectUrl = getState().sessions.redirectUrl.content
    dispatch(push(redirectUrl))
    dispatch(resetSessionsRedirectUrl())
  }
}

export const create = values => {
  return dispatch => {
    dispatch(fetchSessions())

    api
      .post('api/session', values)
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
    setAccessToken()
  ]
}

export const authenticate = () => {
  const token = localStorage.accessToken

  return dispatch => {
    if (token) {
      api
        .get('api/me', {
          headers: { 'Authorization': token }
        })
        .then(res => {
          dispatch(login(res.data.data, true, false))
        })
        .catch(err => setAccessToken())
    }
  }
}