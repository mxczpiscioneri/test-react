import config from '../config'
import {
  IpFilter,
  IpDeniedError
} from 'express-ipfilter'

const customDetection = req => {
  let ipAddress

  const forwardedIpsStr = req.header('x-forwarded-for')

  if (forwardedIpsStr) {
    const forwardedIps = forwardedIpsStr.split(',')
    ipAddress = forwardedIps[0]
  }
  if (!ipAddress)
    ipAddress = req.connection.remoteAddress

  return ipAddress
}

export const ipFilter = IpFilter(config.allowedIps, {
  mode: 'allow',
  detectIp: customDetection
})

export const handleIpDenied = (err, req, res, next) => {
  if(err instanceof IpDeniedError)
    res.status(401)
  else
    res.status(err.status || 500)

  res.send('Access Denied')
}