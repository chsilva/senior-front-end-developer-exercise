import { createActions, createReducer } from 'reduxsauce'

// SESSION
import { getSession } from 'session'

// TYPES
import { LoginDuckActionType, LoginState } from 'store/types'

export const { Types, Creators } = createActions({
  setLoading: ['payload'],
  setSession: ['payload'],
})

const INITIAL_STATE: LoginState = {
  loading: false,
  session: getSession() || '',
}

const setLoading = (
  state = INITIAL_STATE,
  action: LoginDuckActionType
): LoginState => ({
  ...state,
  loading: action.payload.loading,
})

const setSession = (
  state = INITIAL_STATE,
  action: LoginDuckActionType
): LoginState => ({
  ...state,
  session: action.payload.session,
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: setLoading,
  [Types.SET_SESSION]: setSession,
})
