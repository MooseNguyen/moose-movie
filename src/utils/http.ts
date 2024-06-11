import axios, { AxiosError, type AxiosInstance } from 'axios'
import queryString from 'query-string'
import apiConfig from 'src/constants/config'

export class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: apiConfig.baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      paramsSerializer: (params) => {
        return queryString.stringify({ ...params, api_key: apiConfig.apiKey })
      }
    })
    this.instance.interceptors.response.use(
      (response) => {
        if (response && response.data) {
          return response.data
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
