import { isDevelopmentMode } from './envMode'

let windowSpy: jest.SpyInstance

describe('utils/envMode', () => {
  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get')
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  test('isDevelopmentMode: is development mode', () => {
    windowSpy = jest.spyOn(window, 'window', 'get')

    windowSpy.mockImplementation(() => ({
      _env_: {
        NODE_ENV: 'development',
      },
    }))

    expect(isDevelopmentMode()).toEqual(true)
  })

  test('isDevelopmentMode: is production mode', () => {
    windowSpy = jest.spyOn(window, 'window', 'get')

    windowSpy.mockImplementation(() => ({
      _env_: {
        NODE_ENV: 'production',
      },
    }))

    expect(isDevelopmentMode()).toEqual(false)
  })
})
