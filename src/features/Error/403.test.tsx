import { renderWithProviders } from 'helpers/test'

import { Error403 } from './403'

describe('<Error403 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error403 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
