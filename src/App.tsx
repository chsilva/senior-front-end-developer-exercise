import { BrowserRouter as Router } from 'react-router-dom'

// COMPONENTS
import { Header, Footer, Routes } from 'components'

// I18N
import { useTranslation } from 'react-i18next'
import setupI18n from 'i18n/utils'

// STYLES
import './App.css'

setupI18n()

function App() {
  const { t } = useTranslation()

  return (
    <Router>
      <div className="Container">
        <Header
          title={t('header.title')}
          onAdd={() => {
            console.log('lalala')
          }}
        />
        <Routes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
