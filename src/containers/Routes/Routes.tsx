import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

// COMPONENTS
import { Page } from 'components'

//  PAGES
import { BaseMap, PropertyData, UserProfiles } from 'pages'

// TYPES
import { PageRouteProps } from './types'
import { State } from 'store/types'

function Routes(): JSX.Element {
  const { session } = useSelector((state: State) => state.loginState)

  const CustomRoute = (props: PageRouteProps) => {
    const { path, exact, isPrivate } = props

    if (isPrivate) {
      return (
        <Route
          path={path}
          exact={exact}
          render={() => (!!session ? props.page : <Redirect to="/" push />)}
        />
      )
    }

    return <Route path={path} exact={exact} render={() => props.page} />
  }

  return (
    <Page>
      <CustomRoute path="/" exact page={<BaseMap />} />
      <CustomRoute isPrivate path="/user-profiles" page={<UserProfiles />} />
      <CustomRoute path="/property/:id" page={<PropertyData />} />
    </Page>
  )
}

export { Routes }
