import { Link } from 'react-router-dom'

import { changeLanguage } from 'i18n/utils'

const Footer = () => {
  return (
    <footer>
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
export default Footer
