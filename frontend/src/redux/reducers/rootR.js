import { combineReducers } from 'redux'
import authR from './authR'
import itemR from './itemR'

// We could have each reducer inside a file that holds all the reducers and we
// import them look at the example they have. But for simplicity lets define
// them here inside this file

// ES6 property shorthand
// combineReducers({counter, todos}) === combineReducers({counter: counter, todos:todos})
const reducer = combineReducers(
  {
    authR, itemR
  }
)
export default reducer