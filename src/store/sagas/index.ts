import { all } from 'redux-saga/effects'

import LoginSagas from 'store/sagas/login/login'
import PropertySagas from 'store/sagas/property/property'

function* sagas() {
  yield all([...LoginSagas, ...PropertySagas])
}

export default sagas
