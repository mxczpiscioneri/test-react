import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  store
} from './services/store'
import App from './components/App/App'
import './styles/theme/global.scss'

export const applicationContainer = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>
  , applicationContainer
)