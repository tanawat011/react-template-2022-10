import { renderWithProviders } from 'helpers/test'

import { Login } from './Login'

describe('<Login />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Login />)
    expect(asFragment()).toMatchSnapshot()
  })
})
