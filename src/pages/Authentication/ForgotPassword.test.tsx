import { renderWithProviders } from 'helpers/test'

import { ForgotPassword } from './ForgotPassword'

describe('<ForgotPassword />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<ForgotPassword />)
    expect(asFragment()).toMatchSnapshot()
  })
})
