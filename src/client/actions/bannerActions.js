import {
  FETCH_BANNERS,
  RECEIVE_BANNERS
} from '../constants/actionTypes'
import {
  receiveProgressLinear,
  forceFinished
} from './progressLinearActions'
import api from '../lib/api'

const fetchBanners = (value = true) => [
  value ? receiveProgressLinear() : forceFinished(),
  {
    type: FETCH_BANNERS,
    payload: value
  }
]

const receiveBanners = data => [
  forceFinished(),
  {
    type: RECEIVE_BANNERS,
    payload: data
  }
]

export const getBanners = (type) => {
  return dispatch => {
    dispatch(fetchBanners())

    api
      .get(`/banners?page=${type}`)
      .then(res => {
        let listBanners = []

        if (res.data) {
          if (Array.isArray(res.data)) {
            listBanners = res.data
          } else {
            listBanners = new Array()
            listBanners.push(res.data)
          }
        }

        dispatch(receiveBanners(listBanners))
      })
      .catch(err => {
        console.log(err)
        dispatch(fetchBanners(false))
      })
  }
}