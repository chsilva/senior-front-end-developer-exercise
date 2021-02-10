import { DefaultActionTypes } from 'reduxsauce'
import { PutEffect } from 'redux-saga/effects'

export interface LoginState {
  loading: boolean
  session: string
}

interface LoginOwnDuckActionType {
  payload: LoginState
}

export type LoginDuckActionType = LoginOwnDuckActionType & DefaultActionTypes

interface LoginSagaOwnActionType {
  username?: string
  password?: string
  token?: string
}

export type LoginSagaActionType = LoginSagaOwnActionType & PutEffect
