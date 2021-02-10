import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// CONTAINERS
import { Header, Routes } from 'containers'

// COMPONENTS
import { Footer } from 'components'

// I18N
import { useTranslation } from 'react-i18next'
import setupI18n from 'i18n/utils'

// STORE
import store from 'store'

// STYLES
import './App.css'

setupI18n()

function App(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Provider store={store}>
      <Router>
        <div className="Container">
          <Header title={t('header.title')} />
          <Routes />
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
