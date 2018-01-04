import api from '../lib/api'
import axios from 'axios'
import _ from 'lodash'
import { push } from 'react-router-redux'
import {
  FETCH_LETTERS_CREDIT_RESULT,
  RECEIVE_LETTERS_CREDIT_RESULT,
  FETCH_LETTER_CREDIT_BY_ID_RESULT,
  RECEIVE_LETTER_CREDIT_BY_ID_RESULT,
  FETCH_VEHICLES_BY_IDS_RESULT,
  RECEIVE_VEHICLES_BY_IDS_RESULT,
  FETCH_VEHICLE_BY_ID_RESULT,
  RECEIVE_VEHICLE_BY_ID_RESULT
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'

const fetchLettersCredit = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_LETTERS_CREDIT_RESULT,
    payload: value
  }
]

const receiveLettersCredit = data => [
  forceFinished(),
  {
    type: RECEIVE_LETTERS_CREDIT_RESULT,
    payload: data
  }
]

const fetchLetterCreditById = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_LETTER_CREDIT_BY_ID_RESULT,
    payload: value
  }
]

const receiveLetterCreditById = data => [
  forceFinished(),
  {
    type: RECEIVE_LETTER_CREDIT_BY_ID_RESULT,
    payload: data
  }
]

const getLetterCredit = id => {
  return api.get(`/letters_of_credit/${id}`)
    .then(result => result.data)
    .catch(err => console.log(err))
}

export const getLetterCreditById = id => {
  return dispatch => {
    getLetterCredit(id)
      .then(result => {
        if (result) {
          return dispatch(receiveLetterCreditById(result))
        }

        return dispatch(fetchLetterCreditById(false))
      })
  }
}

export const searchLettersCredit = (type, value, limit = 4, idToRemove = null) => {
  return dispatch => {
    api.get(`letters_of_credit?${type}=${value}&limit=${limit}`)
      .then(result => {
        let letters = result.data
        
        if (idToRemove) {
          const index = _.findIndex(letters, x => x.id === parseInt(idToRemove))
          if (index > -1) {
            letters.splice(index, 1)
          }
        } else {
          letters.splice(0, 1)
        }
        
        dispatch(receiveLettersCredit(letters))
      })
      .catch(err => {
        console.error(err)
        dispatch(fetchLettersCredit(false))
      })
  }
}

const fetchVehiclesByIds = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_VEHICLES_BY_IDS_RESULT,
    payload: value
  }
]

const receiveVehiclesByIds = (data, others) => [
  forceFinished(),
  {
    type: RECEIVE_VEHICLES_BY_IDS_RESULT,
    payload: {
      content: data,
      others: others
    }
  }
]

const fetchVehicleById = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_VEHICLE_BY_ID_RESULT,
    payload: value
  }
]

const receiveVehicleById = data => [
  forceFinished(),
  {
    type: RECEIVE_VEHICLE_BY_ID_RESULT,
    payload: data
  }
]

const getVehicle = id => {
  return axios.get(`http://demo9732885.mockable.io/version/specification/${id}`)
    .then(result => result.data)
    .catch(err => console.log(err))
}

export const getVehiclesByIds = (ids, others = false) => {
  return dispatch => {
    let promises = [];

    _.forEach(ids, id => {
      promises.push(getVehicle(id))
    })

    Promise.all(promises)
      .then(result => {
        if (result) {
          return dispatch(receiveVehiclesByIds(result, others))
        }

        return dispatch(fetchVehiclesByIds(false))
      })
  }
}

export const getVehicleById = id => {
  return dispatch => {
    getVehicle(id)
      .then(result => {
        if (result) {
          return dispatch(receiveVehicleById(result))
        }

        return dispatch(fetchVehicleById(false))
      })
  }
}

export const redirect = url => {
  return dispatch => {
    dispatch(push(url))
  }
}