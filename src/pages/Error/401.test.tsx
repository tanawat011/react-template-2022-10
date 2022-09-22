import { renderWithProviders } from 'helpers/test'

import { Error401 } from './401'

describe('<Error401 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error401 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
