import { DefaultActionTypes } from 'reduxsauce'
import { PutEffect } from 'redux-saga/effects'

export interface Property {
  id: string
  position: number[]
  price: string
  description: string
  imgUrl: string
  url: string
}

export interface PropertyState {
  loading: boolean
  properties: Property[]
  property: Property | null
}

interface PropertyOwnDuckActionType {
  payload: PropertyState
}

export type PropertyDuckActionType = PropertyOwnDuckActionType &
  DefaultActionTypes

export interface Filter {
  min?: number
  max?: number
  lat?: number
  lng?: number
  zoom?: number
}

interface PropertySagaOwnActionType {
  properties: Property[]
  filter: Filter
  id: string
}

export type PropertySagaActionType = PropertySagaOwnActionType & PutEffect
