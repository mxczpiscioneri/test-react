import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import toDoReducer from './toDoReducer'
import progressLinearReducer from './progressLinearReducer'

const rootReducer = combineReducers({
  form: formReducer,
  toDoReducer,
  routing: routerReducer,
  progressLinearReducer,
})

export default rootReducer