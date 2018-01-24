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
  RECEIVE_VEHICLES_BY_IDS_RESULT
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

export const searchLettersCredit = (type, value, limit = 4, mainId = null) => {
  return dispatch => {
    dispatch(fetchLettersCredit())

    let promise;

    if (mainId) {
      promise = getLetterCredit(mainId)
    } else {
      promise = new Promise(resolve => resolve())
    }
    
    promise.then((letter) => {
      if (letter) {
        type = 'value'
        value = letter.full_value

        dispatch(receiveLetterCreditById(letter))
      }

      api.get(`/letters_of_credit?${type}=${value}&limit=${limit}`)
        .then(result => {
          let letters = result.data

          if (mainId) {
            const index = _.findIndex(letters, x => x.id === parseInt(mainId))
            if (index > -1) {
              letters.splice(index, 1)
            }
          } else {
            letters[0].hide = true
            dispatch(receiveLetterCreditById(letters[0]))
          }

          dispatch(receiveLettersCredit(letters))
        })
        .catch(err => {
          console.log(err)
          dispatch(fetchLettersCredit(false))
        })
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

const getVehicle = id => {
  return axios.get(`https://catalogo.webmotors.com.br/api/version/specification/${id}`)
    .then(result => result.data.result[0])
    .catch(err => console.log(err))
}

export const getVehiclesByIds = (ids, others = false) => {
  return dispatch => {
    dispatch(fetchVehiclesByIds())

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

export const redirect = url => {
  return dispatch => {
    dispatch(push(url))
  }
}