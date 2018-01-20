import {
  CHANGE_TYPE_SIMULATE_FAST,
  CHANGE_FULL_VALUE_SIMULATE_FAST,
  CHANGE_INSTALLMENT_VALUE_SIMULATE_FAST,
} from '../constants/actionTypes'
import { merge } from 'lodash'

const INITIAL_STATE = {
  simulateFast: {
    fullValue: {
      value: 76000.00,
      min: 15394.59,
      max: 134870.00,
      labels: {
        0: 'R$ 15.394,59',
        10: 'R$ 134.870,00'
      }
    },
    installmentValue: {
      value: 1200.00,
      min: 191.36,
      max: 2201.00,
      labels: {
        0: 'R$ 191,36',
        10: 'R$ 2.201,00'
      }
    },
    type: 1
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TYPE_SIMULATE_FAST:
      return merge({}, state, {
        simulateFast: {
          type: action.payload,
        }
      })

    case CHANGE_FULL_VALUE_SIMULATE_FAST:
      return merge({}, state, {
        simulateFast: {
          fullValue: {
            value: action.payload,
          }
        }
      })

    case CHANGE_INSTALLMENT_VALUE_SIMULATE_FAST:
      return merge({}, state, {
        simulateFast: {
          installmentValue: {
            value: action.payload,
          }
        }
      })

    default:
      return state
  }
}