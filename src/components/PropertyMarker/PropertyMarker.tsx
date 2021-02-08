import { Link } from 'react-router-dom'
import { divIcon } from 'leaflet'
import { Marker, Popup } from 'react-leaflet'

// TYPES
import { Property } from './types'

// STYLES
import './PropertyMarker.scss'

function PropertyMarker(property: Property) {
  const getPropertyIcon = (property: Property) => {
    return divIcon({
      className: 'PropertyMarker',
      html: `
        <span class="PropertyMarker__price">
          ${property.price}
        </span>
      `,
    })
  }

  return (
    <Marker position={property.position} icon={getPropertyIcon(property)}>
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
