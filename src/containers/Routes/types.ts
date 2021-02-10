import { ReactNode } from 'react'

export interface PageRouteProps {
  exact?: boolean
  isPrivate?: boolean
  path: string
  page: JSX.Element | JSX.Element[]
}
