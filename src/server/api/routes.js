import express from 'express'
import { setAccessToken } from './middlewares'
import {
  index,
  notFound
} from './controllers'

const router = express.Router()

router.all('/', index)
router.use(setAccessToken)
router.all('/*', notFound)

export default router