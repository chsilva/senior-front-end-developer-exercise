import axios from 'services/axios'

import { Filter } from 'store/types'

class PropertyService {
  static getProperties(filter: Filter) {
    const filterString = Object.entries(filter)
      .map(([key, value]) => key + '=' + value)
      .join('&')

    return new Promise((resolve, reject) => {
      axios
        .get(`/property${filterString ? `?${filterString}` : ''}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  // static doLogout(token: string) {
  static getProperty(id: string) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/property/${id}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }
}

export default PropertyService
