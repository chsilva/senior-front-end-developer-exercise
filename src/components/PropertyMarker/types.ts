import { LatLngTuple } from 'leaflet'

export interface Property {
  id: string
  position: LatLngTuple
  price: string
  description?: string
  imgUrl?: URL
  url?: URL
}
