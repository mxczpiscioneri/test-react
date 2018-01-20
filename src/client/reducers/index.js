import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import toDoReducer from './toDoReducer'
import testimonialReducer from './testimonialReducer'
import bannerReducer from './bannerReducer'
import progressLinearReducer from './progressLinearReducer'
import homeReducer from './homeReducer'
import resultReducer from './resultReducer'
import interestedReducer from './interestedReducer'
import simulateFastReducer from './simulateFastReducer'

const rootReducer = combineReducers({
  form: formReducer,
  toDoReducer,
  routing: routerReducer,
  progressLinearReducer,
  testimonialReducer,
  bannerReducer,
  homeReducer,
  resultReducer,
  interestedReducer,
  simulateFastReducer,
})

export default rootReducer