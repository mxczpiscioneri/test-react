import api from '../lib/api'
import _ from 'lodash'
import { 
  FETCH_LETTERS_CREDIT,
  RECEIVE_LETTERS_CREDIT 
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'

const fetchLettersCredit = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_LETTERS_CREDIT,
    payload: value
  }
]

const receiveLettersCredit = data => [
  forceFinished(),
  {
    type: RECEIVE_LETTERS_CREDIT,
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
    const token = localStorage.accessToken

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