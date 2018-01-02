import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import toDoReducer from './toDoReducer'
import testimonialReducer from './testimonialReducer'
import progressLinearReducer from './progressLinearReducer'
import lettersCreditReducer from './lettersCreditReducer'

const rootReducer = combineReducers({
  form: formReducer,
  toDoReducer,
  testimonialReducer,
  routing: routerReducer,
  progressLinearReducer,
  lettersCreditReducer,
})

export default rootReducer