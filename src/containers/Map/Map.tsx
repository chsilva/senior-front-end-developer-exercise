import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Point, divIcon } from 'leaflet'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { useTranslation } from 'react-i18next'
import { Spin, Checkbox } from 'antd'

// STORE
import { Creators as PropertyCreators } from 'store/sagas/property'

// COMPONENTS
import { PropertyMarker } from 'components'

//TYPES
import { MapProps as Props } from './types'

// STYLES
import './Map.scss'

function Map(props: Props): JSX.Element {
  const [searchOnMove, setSearchOnMove] = useState(false)
  const { properties, loading } = props
  const dispatch = useDispatch()
  const { t } = useTranslation()

  function MapEvents(): JSX.Element | null {
    const map = useMapEvents({
      click: () => {
        map.locate()
      },
      locationfound: (location) => {
        console.log('location found:', location)
      },
      contextmenu: (event) => {
        console.log('Coordinates: ' + event.latlng.toString())
      },
      moveend: () => {
        if (searchOnMove) {
          const zoom = map.getZoom()
          const { lat, lng } = map.getCenter()
          dispatch(
            PropertyCreators.requestProperties({
              lat,
              lng,
              zoom,
            })
          )
        }
      },
    })

    return null
  }

  const markerClusterProps = {
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    animateAddingMarkers: true,
    iconCreateFunction: function (cluster: any) {
      const n = cluster.getChildCount()
      return divIcon({
        html: n,
        className: 'Map__cluster',
        iconSize: new Point(40, 40),
      })
    },
    spiderfyShapePositions: function (count: number, centerPt: any) {
      var distanceFromCenter = 35,
        markerDistance = 45,
        lineLength = markerDistance * (count - 1),
        lineStart = centerPt.y - lineLength / 2,
        res = [],
        i

      res.length = count

      for (i = count - 1; i >= 0; i--) {
        res[i] = new Point(
          centerPt.x + distanceFromCenter,
          lineStart + markerDistance * i
        )
      }

      return res
    },
  }

  const renderProperties = (): JSX.Element[] => {
    return (
      properties &&
      properties.map((property) => (
        <PropertyMarker key={property.id} {...property} />
      ))
    )
  }

  const renderLoading = (): JSX.Element | null => {
    if (loading) {
      return (
        <div className="Map__loading">
          <Spin size="large" />
        </div>
      )
    }

    return null
  }

  return (
    <>
      <div className="Map">
        <MapContainer
          center={props.currentLocation}
          zoom={15}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents />
          <MarkerClusterGroup {...markerClusterProps}>
            {renderProperties()}
          </MarkerClusterGroup>
        </MapContainer>
        {renderLoading()}
      </div>
      <label className="SearchOnMove">
        <Checkbox
          type="checkbox"
          defaultChecked={searchOnMove}
          onChange={(): void => setSearchOnMove(!searchOnMove)}
        />
        {t('map.searchOnMove')}
      </label>
    </>
  )
}

export { Map }
