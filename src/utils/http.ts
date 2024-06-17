import axios, { AxiosError, type AxiosInstance } from 'axios'
import queryString from 'query-string'
import { getSessionIdFromCookie } from './auth'
import config from 'src/constants/config'

export class Http {
  instance: AxiosInstance
  private sessionId: string
  constructor() {
    this.sessionId = getSessionIdFromCookie()
    this.instance = axios.create({
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      paramsSerializer: (params) => {
        return queryString.stringify({ ...params, api_key: config.apiKey })
      }
    })
    this.instance.interceptors.response.use(
      (response) => {
        if (response && response.data) {
          return response
        }
        return response
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
