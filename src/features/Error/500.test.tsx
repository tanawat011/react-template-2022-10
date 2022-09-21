import { renderWithProviders } from 'helpers/test'

import { Error500 } from './500'

describe('<Error500 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error500 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
