import { LoginState } from './login'
import { PropertyState } from './property'

export interface State {
  loginState: LoginState
  propertyState: PropertyState
}

export * from './login'
export * from './property'
