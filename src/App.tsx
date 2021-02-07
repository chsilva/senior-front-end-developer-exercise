import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Header from 'components/Header'
import Footer from 'components/Footer'
import UserProfiles from 'components/UserProfiles'
import BaseMap from 'components/BaseMap'
import PropertyData from 'components/PropertyData'
import setupI18n from 'i18n/utils'

import './App.css'

setupI18n()

function App() {
  const { t } = useTranslation()

  return (
    <Router>
      <div className="container">
        <Header
          title={t('header.title')}
          onAdd={() => {
            console.log('lalala')
          }}
        />

        <Route path="/" exact component={BaseMap} />
        <Route path="/user-profiles" component={UserProfiles} />
        <Route path="/property/:id" component={PropertyData} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
