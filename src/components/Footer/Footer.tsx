import { Link } from 'react-router-dom'

import { changeLanguage } from 'i18n/utils'

// STYLES
import './Footer.scss'

function Footer(): JSX.Element {
  return (
    <footer className="Footer">
      <p>Copyright &copy; 2021</p>
      <Link to="/user-profiles">About</Link>
      <div>
        <p>Languages</p>
        <span onClick={() => changeLanguage('en')}>[en]</span>
        <span onClick={() => changeLanguage('fr')}>[fr]</span>
      </div>
    </footer>
  )
}

export { Footer }
