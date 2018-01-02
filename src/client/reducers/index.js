import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import toDoReducer from './toDoReducer'
import progressLinearReducer from './progressLinearReducer'
import lettersCreditReducer from './lettersCreditReducer'

const rootReducer = combineReducers({
  form: formReducer,
  toDoReducer,
  routing: routerReducer,
  progressLinearReducer,
  lettersCreditReducer,
})

export default rootReducer