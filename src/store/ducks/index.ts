import { combineReducers } from 'redux'
import loginState from 'store/ducks/login/login'
import propertyState from 'store/ducks/property/property'

import { State } from 'store/types'

export default combineReducers<State>({
  loginState,
  propertyState,
})
