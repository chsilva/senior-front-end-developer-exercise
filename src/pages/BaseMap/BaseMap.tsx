import { useState, useEffect } from 'react'
import { LatLng, Point, divIcon } from 'leaflet'
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

// COMPONENTS
import { PropertyMarker } from 'components'

// CONTAINERS
import { Filters } from 'containers'

// TYPES
import { Property } from 'components/PropertyMarker/types'

// STYLES
import './BaseMap.scss'

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
      //L.marker(event.latlng).addTo(map);
    },
    moveend: () => {
      console.log('Coordinates of the center: ' + map.getCenter().toString())
      console.log(
        'Coordinates from NorthEast: ' + map.getBounds().getNorthEast()
      )
      console.log(
        'Coordinates from southWest: ' + map.getBounds().getSouthWest()
      )
    },
  })

  return null
}

function BaseMap(): JSX.Element {
  const { t } = useTranslation()
  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await axios.get('/api/property')

      setProperties(data)
    }

    fetchProperties()
  }, [])

  const position: LatLng = new LatLng(49.27634216910997, -123.11940420180999)
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
        className: 'MapContainer__cluster',
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

  return (
    <div className="BaseMap">
      <Filters />
      <div className="BaseMap__map">
        <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEvents />
          <MarkerClusterGroup {...markerClusterProps}>
            {properties.map((property, index) => (
              <PropertyMarker key={index} {...property} />
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
      <div className="BaseMap__searchOnMove">
        <input type="checkbox" />
        {t('map.searchOnMove')}
      </div>
    </div>
  )
}

export { BaseMap }
