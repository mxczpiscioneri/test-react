import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import toDoReducer from './toDoReducer'
import testimonialReducer from './testimonialReducer'
import bannerReducer from './bannerReducer'
import progressLinearReducer from './progressLinearReducer'
import lettersCreditReducer from './lettersCreditReducer'
import vehiclesReducer from './vehiclesReducer'

const rootReducer = combineReducers({
  form: formReducer,
  toDoReducer,
  testimonialReducer,
  bannerReducer,
  routing: routerReducer,
  progressLinearReducer,
  lettersCreditReducer,
  vehiclesReducer,
})

export default rootReducer