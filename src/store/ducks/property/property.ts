import { createActions, createReducer } from 'reduxsauce'

// TYPES
import { PropertyDuckActionType, PropertyState } from 'store/types'

export const { Types, Creators } = createActions({
  setProperties: ['payload'],
  setPropertyLoading: ['payload'],
  setProperty: ['payload'],
})

const INITIAL_STATE: PropertyState = {
  loading: false,
  properties: [],
  property: null,
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

const setProperty = (
  state = INITIAL_STATE,
  action: PropertyDuckActionType
): PropertyState => ({
  ...state,
  property: action.payload.property,
})

export default createReducer(INITIAL_STATE, {
  [Types.SET_PROPERTIES]: setProperties,
  [Types.SET_PROPERTY_LOADING]: setPropertyLoading,
  [Types.SET_PROPERTY]: setProperty,
})
