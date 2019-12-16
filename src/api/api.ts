import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'http://localhost:8000' : '/proxy'
axios.defaults.withCredentials = true

export default axios
