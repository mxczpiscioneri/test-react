import api from '../lib/api'
import { FETCH_LETTERS_CREDIT } from '../constants/actionTypes'

export const fetchLettersCredit = () => {
  return dispatch => {
    const token = localStorage.accessToken
    
    api.get('/letters_of_credit', {
      'Authorization': token
    })
      .then(result => {
        return dispatch({
          type: FETCH_LETTERS_CREDIT,
          payload: result
        })
      })
  }
}