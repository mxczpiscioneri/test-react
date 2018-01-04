import api from '../lib/api'
import _ from 'lodash'
import { push } from 'react-router-redux'
import { 
  FETCH_LETTERS_CREDIT,
  RECEIVE_LETTERS_CREDIT,
  FETCH_LETTER_CREDIT_BY_ID,
  RECEIVE_LETTER_CREDIT_BY_ID
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'

const fetchLettersCredit = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_LETTERS_CREDIT,
    payload: value
  }
]

const receiveLettersCredit = data => [
  forceFinished(),
  {
    type: RECEIVE_LETTERS_CREDIT,
    payload: data
  }
]

const fetchLetterCreditById = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_LETTER_CREDIT_BY_ID,
    payload: value
  }
]

const receiveLetterCreditById = data => [
  forceFinished(),
  {
    type: RECEIVE_LETTER_CREDIT_BY_ID,
    payload: data
  }
]

const getLetterCredit = id => {
  return api.get(`/letters_of_credit/${id}`)
    .then(result => result.data)
    .catch(err => console.log(err))
}

export const getLettersCredit = () => {
  return dispatch => {
    api.get('/config_pages?page=home&config_type=highlighted_letter_of_credits')
      .then(config => {
        const ids = config.data[0].references_id
        let promises = [];
        
        _.forEach(ids, id => {
          promises.push(getLetterCredit(id))
        })

        Promise.all(promises)
          .then(result => { 
            dispatch(receiveLettersCredit(result))
          })
      })
      .catch(err => {
        console.error(err)
        dispatch(fetchLettersCredit(false))
      })
  }
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