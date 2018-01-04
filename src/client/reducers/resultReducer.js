import {
  FETCH_LETTERS_CREDIT_RESULT,
  RECEIVE_LETTERS_CREDIT_RESULT,
  FETCH_LETTER_CREDIT_BY_ID_RESULT,
  RECEIVE_LETTER_CREDIT_BY_ID_RESULT,
  FETCH_VEHICLES_BY_IDS_RESULT,
  RECEIVE_VEHICLES_BY_IDS_RESULT,
  RECEIVE_VEHICLE_BY_ID_RESULT,
  FETCH_VEHICLE_BY_ID_RESULT
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  lettersCredit: {
    fetching: false,
    received: true,
    content: []
  },
  letterCredit: {
    fetching: false,
    received: true,
    content: {}
  },
  topVehicles: {
    fetching: false,
    received: true,
    content: []
  },
  otherVehicles: {
    fetching: false,
    received: true,
    content: []
  }
}

const makeResult = (name, content, fetching, received) => {
  let result = {}
  result[name] = {
    content,
    fetching,
    received
  }

  return result
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LETTERS_CREDIT_RESULT: {
      let result = merge({}, state, {
        lettersCredit: {
          fetching: action.payload,
          received: !action.payload
        }
      })
      
      result.lettersCredit.content = []
      return result
    } 
    case RECEIVE_LETTERS_CREDIT_RESULT:
      return merge({}, state, {
        lettersCredit: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })

    case FETCH_LETTER_CREDIT_BY_ID_RESULT: {
      const result = merge({}, state, {
        letterCredit: {
          fetching: action.payload,
          received: !action.payload
        }
      })

      result.letterCredit.content = {}
      return result
    }
    case RECEIVE_LETTER_CREDIT_BY_ID_RESULT:
      return merge({}, state, {
        letterCredit: {
          fetching: false,
          received: true,
          content: action.payload
        }
      })
    case FETCH_VEHICLES_BY_IDS_RESULT:
      return merge({}, state,
        makeResult(
          (action.payload.others ? 'otherVehicles' : 'topVehicles'),
          [],
          action.payload,
          !action.payload)
      )

    case RECEIVE_VEHICLES_BY_IDS_RESULT:
      return merge({}, state,
        makeResult(
          (action.payload.others ? 'otherVehicles' : 'topVehicles'),
          action.payload.content,
          false,
          true))

    case FETCH_VEHICLE_BY_ID_RESULT:
      return merge({}, state, {
        vehicle: {
          fetching: action.payload,
          received: !action.payload
        }
      })

    case RECEIVE_VEHICLE_BY_ID_RESULT:
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