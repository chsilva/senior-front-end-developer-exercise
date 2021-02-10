import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'store/ducks'
import sagas from 'store/sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function makeStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(sagas)

  return store
}

export default makeStore()
