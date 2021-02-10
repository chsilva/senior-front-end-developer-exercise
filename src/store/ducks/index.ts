import { combineReducers } from 'redux'
import loginState from '../ducks/login/login'

import { State } from '../types'

export default combineReducers<State>({
  loginState,
})
