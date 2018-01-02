import { FETCH_LETTERS_CREDIT } from '../constants/actionTypes'

const INITIAL_STATE = {
  lettersCredit: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LETTERS_CREDIT:
      return { ...state, lettersCredit: action.payload }
      break
    default:
      return state
      break
  }
}