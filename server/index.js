import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.js'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import preRender from 'prerender-node'
import config from './config'
import logger from './lib/logger'
const app = express()

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

if (config.env == 'development') {
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
  app.use(preRender)
  app.use(express.static(`${config.paths.dist}`))
  app.get('/*', (req, res) => {
    res.sendFile(`${config.paths.dist}/index.html`)
  })
}

app.listen(config.port, err => {
  if (err) logger.error(err)

  logger.info(`Listening on port ${config.port}`)
})
