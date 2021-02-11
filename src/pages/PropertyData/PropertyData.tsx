import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LatLng } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Spin } from 'antd'
import { useTranslation } from 'react-i18next'

// COMPONENTS
import { PropertyMarker } from 'components'

// STORE
import { Creators as PropertyCreators } from 'store/sagas/property'

// TYPES
import { State } from 'store/types'

// STYLES
import './PropertyData.scss'

interface ParamsProps {
  id: string
}

function PropertyData(): JSX.Element | null {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { id } = useParams<ParamsProps>()
  const { property, loading } = useSelector(
    (state: State) => state.propertyState
  )

  useEffect(() => {
    dispatch(PropertyCreators.requestProperty(id))
  }, [dispatch, id])

  if (loading) {
    return (
      <div className="PropertyData">
        <div className="PropertyData__loading">
          <Spin size="large" />
        </div>
      </div>
    )
  }

  if (!property) {
    return null
  }

  const latLngLocation = new LatLng(property.position[0], property.position[1])

  return (
    <div className="PropertyData">
      <span className="PropertyData__title">{property.description}</span>
      <div className="PropertyData__info">
        {/* THIS SHOULD BE AN ARRAY OF IMAGES TO CREATE A CAROUSEL */}
        <img src={property.imgUrl} alt={property.description} />

        <span>
          ${property.price}
          <small>{t('propertyData.priceMonth')}</small>
        </span>
      </div>
      <span className="PropertyData__title">
        {t('propertyData.propertyLocation')}
      </span>
      <MapContainer
        className="PropertyData__map"
        center={latLngLocation}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PropertyMarker {...property} />
      </MapContainer>
    </div>
  )
}

export { PropertyData }
