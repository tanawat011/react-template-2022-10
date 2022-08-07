import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import type { RequestMethod } from 'types/common'

import axios from 'axios'

export interface FetchApiParams {
  q?: string
  id?: string
  code?: string
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
  searchColumns?: string
  statusProgress?: string
  redirectUrl?: string
}

export interface FetchApi {
  baseURL?: string
  method: RequestMethod
  path: string
  options?: AxiosRequestConfig
  data?: unknown
  params?: FetchApiParams & { [key: string]: string }
}

export type Response<T> = {
  status?: number
  data?: T
  error?: Error | AxiosError | unknown
}

export const fetchApi = async <T>(option: FetchApi): Promise<Response<T>> => {
  const url = window._env_.REACT_APP_API_URL
  const { baseURL = url, method, path, data, ...options } = option

  const config: AxiosRequestConfig = {
    baseURL: baseURL + path,
    method,
    data,
    ...options,
  }

  try {
    const response: AxiosResponse<T> = await axios(config)

    return {
      status: response.status,
      data: response.data,
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error?.response) {
      return {
        status: error.response.status,
        error,
      }
    }

    return {
      error,
    }
  }
}
