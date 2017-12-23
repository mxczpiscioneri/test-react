import config from '../config'
import {
  IpFilter,
  IpDeniedError
} from 'express-ipfilter'

export const ipFilter = IpFilter(config.allowedIps, { mode: 'allow' })

export const handleIpDenied = (err, req, res, next) => {
  if(err instanceof IpDeniedError)
    res.status(401)
  else
    res.status(err.status || 500)

  res.send('Access Denied')
}