import axios from 'axios'
import api from '../lib/api'
import _ from 'lodash'
import {
  FETCH_VEHICLES_BY_IDS,
  RECEIVE_VEHICLES_BY_IDS,
  FETCH_VEHICLE_BY_ID,
  RECEIVE_VEHICLE_BY_ID
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'

const fetchVehiclesByIds = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_VEHICLES_BY_IDS,
    payload: value
  }
]

const receiveVehiclesByIds = (data, others) => [
  forceFinished(),
  {
    type: RECEIVE_VEHICLES_BY_IDS,
    payload: {
      content: data,
      others: others
    }
  }
]

const fetchVehicleById = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_VEHICLE_BY_ID,
    payload: value
  }
]

const receiveVehicleById = data => [
  forceFinished(),
  {
    type: RECEIVE_VEHICLE_BY_ID,
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