import api from '../lib/api'
import { store } from './store'

export const setAccessToken = token => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token
    localStorage.setItem('accessToken', token)
  } else {
    delete api.defaults.headers.common['Authorization']
    delete localStorage.accessToken
    delete localStorage.keepLogged
  }
}

export const isLogged = () => {
  const auth = store.getState().sessionsReducer.authenticate

  return auth.received && auth.content.isLogged
}

export const keepLoggedVerify = () => {
  window.onbeforeunload = () => {
    if(!localStorage.getItem('keepLogged'))
      return setAccessToken()
  }
}

export const keepLogged = value =>
  localStorage.setItem('keepLogged', value)