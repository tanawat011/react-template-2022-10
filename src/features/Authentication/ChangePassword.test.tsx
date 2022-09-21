import { renderWithProviders } from 'helpers/test'

import { ChangePassword } from './ChangePassword'

describe('<ChangePassword />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<ChangePassword />)
    expect(asFragment()).toMatchSnapshot()
  })
})
