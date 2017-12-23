import {
  RECEIVE_PROGRESS_LINEAR,
  REMOVE_PROGRESS_LINEAR,
  UPDATE_PROGRESS_LINEAR
} from '../constants/actionTypes'

let timers = []

export const receiveProgressLinear = () => {
  return dispatch => {
    dispatch({
      type: RECEIVE_PROGRESS_LINEAR
    })

    timers.push(setInterval(() => dispatch(updateProgressLinear(1)), 100));
  }
}

export const updateProgressLinear = completed => {
  return (dispatch, getState) => {
    const currentCompleted = getState().progressLinearReducer.content.completed

    if (currentCompleted >= 100)
      setTimeout(() => dispatch(removeProgressLinear()), 1500)
    else
      dispatch({
        type: UPDATE_PROGRESS_LINEAR,
        payload: currentCompleted + completed
      })
  }
}

export const forceFinished = () => {
  return dispatch => {
    dispatch(updateProgressLinear(100))
  }
}

export const removeProgressLinear = () => {
  timers.forEach(timer => clearInterval(timer))

  return {
    type: REMOVE_PROGRESS_LINEAR
  }
}
