import { renderWithProviders } from 'helpers/test'

import { Error503 } from './503'

describe('<Error503 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error503 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
