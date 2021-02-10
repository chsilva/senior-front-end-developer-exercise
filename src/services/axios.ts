import axios from 'axios'

// SESSION
import { getSession } from 'session'

export default axios.create({
  baseURL: '/api',
  headers: {
    authorization: getSession() || '',
  },
})
