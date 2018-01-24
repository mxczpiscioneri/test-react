import {
  CHANGE_TYPE_SIMULATE_FAST,
  CHANGE_FULL_VALUE_SIMULATE_FAST,
  CHANGE_INSTALLMENT_VALUE_SIMULATE_FAST,
} from '../constants/actionTypes'

const setType = value => ({
  type: CHANGE_TYPE_SIMULATE_FAST,
  payload: value
})

const setFullValue = value => ({
  type: CHANGE_FULL_VALUE_SIMULATE_FAST,
  payload: value
})

const setInstallmentValue = value => ({
  type: CHANGE_INSTALLMENT_VALUE_SIMULATE_FAST,
  payload: value
})

export const changeType = value => {
  if (value === 1) {
    _satellite.track('valorParcela')
  } else {
    _satellite.track('valorVeiculo')
  }
  return dispatch => {
    dispatch(setType(value))
  }
}

export const changeFullValue = value => {
  return dispatch => {
    dispatch(setFullValue(value))
  }
}

export const changeInstallmentValue = value => {
  return dispatch => {
    dispatch(setInstallmentValue(value))
  }
}