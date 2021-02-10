import { LatLng } from 'leaflet'

import { Property } from 'store/types'

export interface MapProps {
  properties: Property[]
  currentLocation: LatLng
  loading: boolean
}
