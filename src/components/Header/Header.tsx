import { Link, useLocation } from 'react-router-dom'

// COMPONENTS
import { Button } from 'components'

// TYPES
import { Props as HeaderProps } from './types'

// STYLES
import './Header.scss'

function Header(props: HeaderProps) {
  const { title, onAdd, showAdd } = props
  const location = useLocation()

  return (
    <header className="Header">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <div>
        <span>Create a Listing | Live Chat | FAQ | Contact</span>
        {location.pathname === '/' && (
          <Button
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Login'}
            onClick={onAdd}
          />
        )}
      </div>
    </header>
  )
}

export { Header }
