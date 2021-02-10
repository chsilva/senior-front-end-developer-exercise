import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// CONTAINERS
import { FormLoginModal } from 'containers'

// COMPONENTS
import { Button } from 'antd'

// STORE
import { Creators as LoginCreators } from 'store/sagas/login'

// TYPES
import { State } from 'store/types'
import { Props as HeaderProps } from './types'

// STYLES
import './Header.scss'

function Header(props: HeaderProps): JSX.Element {
  const dispatch = useDispatch()
  const { session, loading } = useSelector((state: State) => state.loginState)
  const [modalVisible, setModalVisible] = useState(false)
  const { title } = props

  const handleLogin = () => {
    setModalVisible(true)
  }

  const handleLogout = () => {
    dispatch(LoginCreators.doLogout())
    setModalVisible(false)
  }

  return (
    <header className="Header">
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <div className="Header__right">
        <span>Create a Listing | Live Chat | FAQ | Contact</span>
        <Button
          loading={loading}
          type={session ? 'primary' : 'default'}
          onClick={session ? handleLogout : handleLogin}
        >
          {session ? 'Logout' : 'Login'}
        </Button>
      </div>
      <FormLoginModal
        visible={modalVisible}
        fnClose={() => setModalVisible(false)}
      />
    </header>
  )
}

export { Header }
