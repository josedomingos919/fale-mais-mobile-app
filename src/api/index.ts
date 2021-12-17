const axios = require('axios')
import * as consts from './consts'

const API = axios.create({
  baseURL: consts.BASE_URL,
  timeout: consts.TIMEOUT,
  headers: { 'x-app-key': consts.X_APP_KEY },
})
 
export default API
