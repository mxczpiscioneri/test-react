import config from '../../config'
import environments from './environments'

const {
  env,
  paths
} = config

export default {
  ...environments[config.env],
  env,
  paths,
  allowedIps: [
    '200.220.180.109',
    '200.220.180.66',
    '200.220.188.67',
    '200.220.180.100',
    '200.220.180.101',
    '200.220.180.109',
    '201.48.209.89',
    '189.2.157.34',
    '192.168.1.63',
    '177.189.64.90',
    '187.75.73.111',
    '187.32.49.173',
    '179.95.131.182',
    '179.95.149.125',
    '191.183.101.26',
    '177.206.125.11',
  ]
}