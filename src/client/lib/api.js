import axios from 'axios'
import config from '../config'

const api = axios.create({
  baseURL: config.api.baseURL,
  timeout: 1000
})

export const createSessionReducer = values =>
  api.post('/sessions', values)

export const authResource = headers =>
  api.get('/auth', headers)

export default api