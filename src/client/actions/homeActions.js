import api from '../lib/api'
import axios from 'axios'
import _ from 'lodash'
import {
  FETCH_LETTERS_CREDIT_HOME,
  RECEIVE_LETTERS_CREDIT_HOME,
  FETCH_VEHICLES_HOME,
  RECEIVE_VEHICLES_HOME
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'

const fetchLettersCredit = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_LETTERS_CREDIT_HOME,
    payload: value
  }
]

const receiveLettersCredit = data => [
  forceFinished(),
  {
    type: RECEIVE_LETTERS_CREDIT_HOME,
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

const fetchVehicles = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_VEHICLES_HOME,
    payload: value
  }
]

const receiveVehicles = (data, others) => [
  forceFinished(),
  {
    type: RECEIVE_VEHICLES_HOME,
    payload: data
  }
]

const getVehicle = id => {
  return axios.get(`http://demo9732885.mockable.io/version/specification/${id}`)
    .then(result => result.data)
    .catch(err => console.log(err))
}

export const getVehicles = () => {
  return dispatch => {
    axios.get('http://demo9732885.mockable.io/config_pages?page=home&config_type=highlighted_vehicles')
      .then(config => {
        const ids = config.data[0].references_id
        let promises = [];

        _.forEach(ids, id => {
          promises.push(getVehicle(id))
        })

        Promise.all(promises)
          .then(result => {
            dispatch(receiveVehicles(result))
          })
      })
      .catch(err => {
        console.error(err)
        dispatch(fetchVehicles(false))
      })
  }
}