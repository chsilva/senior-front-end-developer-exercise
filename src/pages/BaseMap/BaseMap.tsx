import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LatLng } from 'leaflet'

// CONTAINERS
import { Filters, Map } from 'containers'

// STORE
import { Creators as PropertyCreators } from 'store/sagas/property'

// TYPES
import { State } from 'store/types'

// STYLES
import './BaseMap.scss'

function BaseMap(): JSX.Element {
  const dispatch = useDispatch()
  // We could setCurrentLocation when get user current location
  // I'll use this mocked to work with the mocked data
  const [currentLocation, setCurrentLocation] = useState(
    new LatLng(49.27634216910997, -123.11940420180999)
  )
  const { properties, loading } = useSelector(
    (state: State) => state.propertyState
  )

  useEffect(() => {
    const { lat, lng } = currentLocation
    dispatch(
      PropertyCreators.requestProperties({
        zoom: 15,
        lat,
        lng,
      })
    )
  }, [dispatch, currentLocation])

  return (
    <div className="BaseMap">
      {currentLocation && (
        <>
          <Filters loading={loading} currentLocation={currentLocation} />
          <Map
            properties={properties}
            currentLocation={currentLocation}
            loading={loading}
          />
        </>
      )}
    </div>
  )
}

export { BaseMap }
