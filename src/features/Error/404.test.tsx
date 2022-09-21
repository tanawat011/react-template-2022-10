import { renderWithProviders } from 'helpers/test'

import { Error404 } from './404'

describe('<Error404 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error404 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
