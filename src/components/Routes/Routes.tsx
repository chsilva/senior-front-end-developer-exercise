import { Route } from 'react-router-dom'

// COMPONENTS
import { Page } from 'components'

//  PAGES
import { BaseMap, PropertyData, UserProfiles } from 'pages'

function Routes() {
  return (
    <Page>
      <Route path="/" exact component={BaseMap} />
      <Route path="/user-profiles" component={UserProfiles} />
      <Route path="/property/:id" component={PropertyData} />
    </Page>
  )
}

export { Routes }
