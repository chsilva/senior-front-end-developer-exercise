import { Link } from 'react-router-dom'

// TYPES
import { PropertyListProps as Props } from './types'

// STYLES
import './PropertyList.scss'

function PropertyList(props: Props) {
  const { properties } = props

  return (
    <div className="PropertyList">
      {properties.map((property) => (
        <Link
          className="PropertyListItem"
          key={property.id}
          to={`/property/${property.id}`}
        >
          <img
            className="PropertyListItem__image"
            src={property.imgUrl}
            alt={property.description}
          />
          <span className="PropertyListItem__price">{`$${property.price}`}</span>
          <span className="PropertyListItem__description">
            {property.description}
          </span>
        </Link>
      ))}
    </div>
  )
}

export { PropertyList }
