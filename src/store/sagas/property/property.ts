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

const takes = [takeLatest(Types.REQUEST_PROPERTIES, requestProperties)]

export default takes
