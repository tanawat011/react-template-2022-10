import { renderWithProviders } from 'helpers/test'

import { Error502 } from './502'

describe('<Error502 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error502 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
