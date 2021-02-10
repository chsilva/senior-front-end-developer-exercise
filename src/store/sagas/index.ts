import { all } from 'redux-saga/effects'

import LoginSagas from 'store/sagas/login/login'

function* sagas() {
  yield all([...LoginSagas])
}

export default sagas
