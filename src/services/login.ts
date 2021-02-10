import axios from 'services/axios'

class LoginService {
  // static doLogin(username: string, password: string) {
  static doLogin() {
    return new Promise((resolve, reject) => {
      axios
        .get(`/login/8981c7de-9548-4ad5-bcbd-a253915570bd`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }

  // static doLogout(token: string) {
  static doLogout() {
    return new Promise((resolve, reject) => {
      axios
        .get(`/logout/8981c7de-9548-4ad5-bcbd-a253915570bd`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error))
    })
  }
}

export default LoginService
