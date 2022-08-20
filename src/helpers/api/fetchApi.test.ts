/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import { fetchApi } from './fetchApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<any>

describe('helpers/api', () => {
  test('fetchApi: should resolved and got a result', async () => {
    const mockResponse = {
      status: 200,
      data: [],
    }
    mockedAxios.mockResolvedValue(mockResponse)

    const { data, status, error } = await fetchApi({
      method: 'get',
      path: '/users',
    })

    expect(status).toEqual(mockResponse.status)
    expect(data).toEqual(mockResponse.data)
    expect(error).toEqual(undefined)
  })

  test('fetchApi: should rejected and got an axios error', async () => {
    const mockResponse = {
      response: {
        status: 500,
        data: [],
      },
    }
    mockedAxios.isAxiosError.mockReturnValue(true)
    mockedAxios.mockRejectedValue(mockResponse)

    const { data, status, error } = await fetchApi({
      method: 'get',
      path: '/users',
    })

    expect(status).toEqual(mockResponse.response.status)
    expect(data).toEqual(undefined)
    expect(error).toBeTruthy()
  })

  test('fetchApi: should rejected with other error', async () => {
    const mockResponse = {
      response: {
        status: 500,
        data: [],
      },
    }
    mockedAxios.mockRejectedValue(mockResponse)

    const { data, status, error } = await fetchApi({
      method: 'get',
      path: '/users',
    })

    expect(status).toEqual(undefined)
    expect(data).toEqual(undefined)
    expect(error).toBeTruthy()
  })
})
