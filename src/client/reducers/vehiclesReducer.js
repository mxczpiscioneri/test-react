import {
  FETCH_VEHICLES_BY_IDS,
  RECEIVE_VEHICLES_BY_IDS,
  FETCH_LETTER_CREDIT_BY_ID,
  RECEIVE_VEHICLE_BY_ID
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  vehicles: {
    fetching: false,
    received: true,
    content: []
  },
  otherVehicles: {
    fetching: false,
    received: true,
    content: {}
  }
}

const makeResult = (name, content, fetching, received) => {
  let result = {}
  result[name] = {
    fetching,
    received
  }

  return result
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_VEHICLES_BY_IDS:
      return merge({}, state,
        makeResult(
          (action.payload.others ? 'otherVehicles' : 'vehicles'),
          [],
          action.payload,
          !action.payload)
      )

    case RECEIVE_VEHICLES_BY_IDS:
      return merge({}, state, 
        makeResult(
          (action.payload.others ? 'otherVehicles' : 'vehicles'),
          action.payload.content,
          false,
          true))

    case FETCH_LETTER_CREDIT_BY_ID:
      return merge({}, state, {
        vehicle: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_VEHICLE_BY_ID:
      return merge({}, state, {
        vehicle: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    default:
      return state
  }
}