import { createActions } from 'reduxsauce'
import { put, call, delay, takeEvery } from 'redux-saga/effects'

// STORE
import { Creators as LoginCreators } from 'store/ducks/login'

// SESSION
import { setSession, clearSession } from 'session'

// SERVICES
import LoginService from 'services/login'

// TYPES
import { LoginSagaActionType } from 'store/types/login'

export const { Types, Creators } = createActions(
  {
    doLogin: ['username', 'password'],
    doLogout: ['token'],
  },
  { prefix: '@SAGA/' }
)

function* doLogin({ username, password }: LoginSagaActionType): Generator {
  yield put(LoginCreators.setLoading({ loading: true }))
  try {
    // const loginResponse: any = yield call(LoginService.doLogin, username, password)
    const loginResponse: any = yield call(LoginService.doLogin)
    yield delay(1000)
    setSession(loginResponse.token)
    yield put(LoginCreators.setSession({ session: loginResponse.token }))
  } catch (e) {
    // error handling
  } finally {
    yield put(LoginCreators.setLoading({ loading: false }))
  }
}

function* doLogout({ token }: LoginSagaActionType): Generator {
  yield put(LoginCreators.setLoading({ loading: true }))
  try {
    // const loginResponse: any = yield call(LoginService.doLogin, { token })
    yield call(LoginService.doLogout)
    yield delay(1000)
    clearSession()
    yield put(LoginCreators.setSession({ session: '' }))
  } catch (e) {
    // error handling
  } finally {
    yield put(LoginCreators.setLoading({ loading: false }))
  }
}

const takes = [
  takeEvery(Types.DO_LOGIN, doLogin),
  takeEvery(Types.DO_LOGOUT, doLogout),
]

export default takes
