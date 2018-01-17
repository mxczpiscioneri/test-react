import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import preRender from 'prerender-node'
import config from './config'
import logger from './lib/logger'
import apiRoutes from './api/routes'
import {
  ipFilter,
  handleIpDenied
} from './services/restrictIps'

const app = express()

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/api', apiRoutes)

if (config.env == 'development') {
  const webpackConfig = require('../../webpack.config.babel.js').default
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      noInfo: true,
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    reload: true
  }))
  app.use(express.static(config.paths.public))

  app.get('/*', (req, res) => {
    res.set('content-type', 'text/html')
    res.write(middleware.fileSystem.readFileSync(`${config.paths.dist}/index.html`))
    res.end()
  })
} else {
  app.use(ipFilter)
  app.use(handleIpDenied)
  app.use(preRender)
  app.use(express.static(`${config.paths.dist}`))
  app.get('/*', (req, res) => {
    res.sendFile(`${config.paths.dist}/index.html`)
  })
}

export const server = app.listen(config.port, err => {
  if (err) logger.error(err)

  logger.info(`Listening on port ${config.port}`)
})
