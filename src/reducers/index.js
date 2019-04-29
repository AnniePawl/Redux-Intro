import { combineReducers } from 'redux'
import counterReducers from './counterReducer'
import counterReducer from './counterReducer';


const reducers = combineReducers({
  counter: counterReducer
})

export default reducers