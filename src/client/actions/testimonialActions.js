import {
  FETCH_TESTIMONIALS,
  RECEIVE_TESTIMONIALS
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'
import api from '../lib/api'

const fetchTestimonials = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_TESTIMONIALS,
    payload: value
  }
]

const receiveTestimonials = data => [
  forceFinished(),
  {
    type: RECEIVE_TESTIMONIALS,
    payload: data
  }
]

const getTestimonial = (id) => {
  return api
    .get(`/testimonials/${id}`)
    .then(res => {
      if (Array.isArray(res.data)) {
        return res.data[0]
      }
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getTestimonials = type => {
  return dispatch => {
    dispatch(fetchTestimonials())

    api
      .get(`/config_pages?page=${type}&config_type=highlighted_testimonials`)
      .then(res => {
        const idTestimonials = res.data[0].references_id

        let promises = []
        idTestimonials.forEach(id => {
          promises.push(getTestimonial(id)
            .then(res => res)
          )
        })

        Promise.all(promises)
          .then((data) => {
            dispatch(receiveTestimonials(data))
          })
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchTestimonials(false))
      })
  }
}