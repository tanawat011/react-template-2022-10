import axios from 'axios'

export const setupAxios = () => {
  axios.defaults.timeout = 30000
  axios.defaults.withCredentials = true
  axios.interceptors.response.use(
    (res) => {
      return res
    },
    (error) => {
      throw error
    },
  )
}
