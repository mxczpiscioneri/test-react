import api from '../lib/api'
import { push } from 'react-router-redux'
import {
  FETCH_INTERESTED_RESULT,
  RECEIVE_INTERESTED_RESULT,
  RECEIVE_FORM_RESULT,
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'

const fetchInterested = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_INTERESTED_RESULT,
    payload: value
  }
]

const receiveInterested = data => [
  forceFinished(),
  {
    type: RECEIVE_INTERESTED_RESULT,
    payload: data
  }
]

const receiveForm = data => {
  return {
    type: RECEIVE_FORM_RESULT,
    payload: data
  }
}

export const sendForm = (form) => {
  return dispatch => {
    api.post('/leads', form)
      .then(result => {
        const data = {
          send: true,
          error: ''
        }
        dispatch(receiveForm(data))
      })
      .catch(err => {
        const data = {
          send: false,
          error: 'Erro!!!'
        }
        dispatch(receiveForm(data))
      })
  }
}

export const closeAlert = url => {
    return dispatch => {
        const data = {
            send: false,
            error: ''
        }
        dispatch(receiveForm(data))
    }
}

export const redirect = url => {
    return dispatch => {
        dispatch(push(url))
    }
}
