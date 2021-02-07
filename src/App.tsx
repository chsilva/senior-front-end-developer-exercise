import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import UserProfiles from './components/UserProfiles'
import BaseMap from './components/BaseMap'
import PropertyData from './components/PropertyData'

import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <Header
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
