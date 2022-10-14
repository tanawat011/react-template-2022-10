import { camelToKebab } from './camelToKebab'

describe('helpers/string', () => {
  test('camelToKebab', () => {
    expect(camelToKebab('cameltokebab')).toBe('cameltokebab')
    expect(camelToKebab('camelToKebab')).toBe('camel-to-kebab')
  })
})
