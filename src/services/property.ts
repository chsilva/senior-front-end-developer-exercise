import axios from 'services/axios'

import { Filter } from 'store/types'

class PropertyService {
  static getProperties(filter: Filter) {
    const filterString = Object.entries(filter)
      .filter(([key, value]) => {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            return true
          }
        } else {
          if (value) {
            return true
          }

          return false
        }
      })
      .map(([key, value]) => key + '=' + value)
      .join('&')

    return new Promise((resolve, reject) => {
      axios
        .get(`/property${filterString ? `?${filterString}` : ''}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

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
