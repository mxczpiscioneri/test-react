import axios from 'axios'
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
    dispatch(receiveForm({ isSubmitting: true }))

    api.post('/leads', form)
      .then(result => {
        const data = {
          send: true,
          error: '',
          isSubmitting: false
        }
        dispatch(receiveForm(data))
      })
      .catch(err => {
        let message = 'Ocorreu um erro inesperado ao enviar as informações'
        if (err.response && err.response.data && err.response.data.error) {
          message = err.response.data.error
        } else if (err.response && err.response.status === 400) {
          message = 'A validação falhou! preencha todos os campos'
        }

        const data = {
          send: true,
          error: message,
          isSubmitting: false
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

const getVehicle = id => {
  return axios.get(`https://catalogo.webmotors.com.br/api/version/specification/${id}`)
    .then(result => result.data.result[0])
    .catch(err => console.log(err))
}

export const getLetterCreditById = id => {
  return dispatch => {
    dispatch(fetchInterested())

    api.get(`/letters_of_credit/${id}`)
      .then(result => result.data)
      .then(letterCredit => {
        getVehicle(letterCredit.catalog_info.vehicle_id)
          .then(vehicle => {
            letterCredit.vehicle = vehicle

            return dispatch(receiveInterested(letterCredit))
          })
      })
      .catch(err => {
        console.log(err)
        return dispatch(fetchInterested(false))
      })
  }
}