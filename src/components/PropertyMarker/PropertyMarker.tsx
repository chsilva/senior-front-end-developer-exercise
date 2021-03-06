import { Link } from 'react-router-dom'
import { divIcon, DivIcon, LatLng } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'

// TYPES
import { Property } from 'store/types'

// STYLES
import './PropertyMarker.scss'

function PropertyMarker(property: Property): JSX.Element {
  const getPropertyIcon = (property: Property): DivIcon => {
    return divIcon({
      className: 'PropertyMarker',
      html: `
        <span class="PropertyMarker__price">
          $&nbsp;${property.price}
        </span>
      `,
    })
  }

  return (
    <Marker
      position={new LatLng(property.position[0], property.position[1])}
      icon={getPropertyIcon(property)}
    >
      <Popup>
        <div className="PropertyMarkerPopup">
          <p className="PropertyMarkerPopup__title">
            <Link to={`/property/${property.id}`}>{property.description}</Link>
          </p>
          <img
            className="PropertyMarkerPopup__image"
            alt={property.description}
            src={property.imgUrl?.toString()}
          />
        </div>
      </Popup>
    </Marker>
  )
}

export { PropertyMarker }
