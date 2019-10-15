import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '/proxy'
axios.defaults.withCredentials = true

export default axios
