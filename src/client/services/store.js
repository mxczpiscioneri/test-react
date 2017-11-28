import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory } from 'react-router'
import {
  syncHistoryWithStore,
  routerMiddleware as createRouterMiddleware
} from 'react-router-redux'
import reducers from '../reducers'

const routerMiddleware = createRouterMiddleware(browserHistory)

const middlewares = applyMiddleware(thunk, multi, promise, routerMiddleware)

export const store = createStore(
  reducers,
  process.env.ENV == 'development' ? composeWithDevTools(middlewares) : middlewares
)

export const history = syncHistoryWithStore(browserHistory, store)