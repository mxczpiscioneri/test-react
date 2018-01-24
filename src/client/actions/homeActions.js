import api from '../lib/api'
import axios from 'axios'
import _ from 'lodash'
import {
  FETCH_LETTERS_CREDIT_HOME,
  RECEIVE_LETTERS_CREDIT_HOME,
  FETCH_VEHICLES_HOME,
  RECEIVE_VEHICLES_HOME,
  FETCH_VIDEO,
  RECEIVE_VIDEO
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
    dispatch(fetchLettersCredit())

    api.get('/config_pages?page=home&config_type=highlighted_letter_of_credits')
      .then(config => {
        if (config.data && config.data.length > 0) {
          const ids = config.data[0].references_id
          let promises = []

          _.forEach(ids, id => {
            promises.push(getLetterCredit(id))
          })

          Promise.all(promises)
            .then(result => {
              const resultClean = _.filter(result)
              dispatch(receiveLettersCredit(resultClean))
            })
        } else {
          dispatch(receiveLettersCredit([]))
        }
      })
      .catch(err => {
        console.log(err)
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
  return axios.get(`https://catalogo.webmotors.com.br/api/version/specification/${id}`)
    .then(result => result.data.result[0])
    .catch(err => console.log(err))
}

export const getVehicles = () => {
  return dispatch => {
    dispatch(fetchVehicles())

    api.get('/config_pages?page=home&config_type=highlighted_vehicles')
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
        console.log(err)
        dispatch(fetchVehicles(false))
      })
  }
}

const fetchVideo = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_VIDEO,
    payload: value
  }
]

const receiveVideo = data => [
  forceFinished(),
  {
    type: RECEIVE_VIDEO,
    payload: data
  }
]

export const getVideo = () => {
  return dispatch => {
    dispatch(fetchVideo())

    api.get('/config_pages?page=home&config_type=highlighted_video_url')
      .then(config => {
        if (config.data && config.data.length > 0) {
          const videoUrl = config.data[0].references_string
          dispatch(receiveVideo(videoUrl))
        } else {
          dispatch(receiveVideo(null))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchVideo(false))
      })
  }
}