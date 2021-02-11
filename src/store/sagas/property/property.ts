import { createActions } from 'reduxsauce'
import { put, call, delay, takeLatest } from 'redux-saga/effects'

// STORE
import { Creators as PropertyCreators } from 'store/ducks/property'

// SERVICES
import PropertyService from 'services/property'

// TYPES
import { PropertySagaActionType } from 'store/types'

export const { Types, Creators } = createActions(
  {
    requestProperties: ['filter'],
    requestProperty: ['id'],
  },
  { prefix: '@SAGA/' }
)

function* requestProperties({ filter }: PropertySagaActionType): Generator {
  yield put(PropertyCreators.setPropertyLoading({ loading: true }))
  try {
    const propertiesResponse: any = yield call(
      PropertyService.getProperties,
      filter
    )
    yield delay(1000)
    yield put(
      PropertyCreators.setProperties({ properties: propertiesResponse })
    )
  } catch (e) {
    // error handling
  } finally {
    yield put(PropertyCreators.setPropertyLoading({ loading: false }))
  }
}

function* requestProperty({ id }: PropertySagaActionType): Generator {
  yield put(PropertyCreators.setPropertyLoading({ loading: true }))
  try {
    const propertiesResponse: any = yield call(PropertyService.getProperty, id)
    console.log(propertiesResponse)
    yield delay(1000)
    yield put(PropertyCreators.setProperty({ property: propertiesResponse }))
  } catch (e) {
    // error handling
  } finally {
    yield put(PropertyCreators.setPropertyLoading({ loading: false }))
  }
}

const takes = [
  takeLatest(Types.REQUEST_PROPERTIES, requestProperties),
  takeLatest(Types.REQUEST_PROPERTY, requestProperty),
]

export default takes
