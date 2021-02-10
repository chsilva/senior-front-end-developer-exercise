import { changeLanguage } from 'i18n/utils'

// STYLES
import './Footer.scss'

function Footer(): JSX.Element {
  return (
    <footer className="Footer">
      <p>Copyright &copy; 2021</p>
      <div className="Footer__lang">
        <p>Languages</p>
        <span onClick={() => changeLanguage('en')}>[en]</span>
        <span onClick={() => changeLanguage('fr')}>[fr]</span>
      </div>
    </footer>
  )
}

export { Footer }
