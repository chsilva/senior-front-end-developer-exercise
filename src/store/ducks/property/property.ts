import { createActions, createReducer } from 'reduxsauce'

// TYPES
import { PropertyDuckActionType, PropertyState } from 'store/types'

export const { Types, Creators } = createActions({
  setProperties: ['payload'],
  setPropertyLoading: ['payload'],
})

const INITIAL_STATE: PropertyState = {
  loading: false,
  properties: [],
}

const setPropertyLoading = (
  state = INITIAL_STATE,
  action: PropertyDuckActionType
): PropertyState => ({
  ...state,
  loading: action.payload.loading,
})

const setProperties = (
  state = INITIAL_STATE,
  action: PropertyDuckActionType
): PropertyState => ({
  ...state,
  properties: action.payload.properties,
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_PROPERTIES]: setProperties,
  [Types.SET_PROPERTY_LOADING]: setPropertyLoading,
})
