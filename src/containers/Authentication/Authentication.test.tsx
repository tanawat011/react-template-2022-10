import { allRoutes } from 'Routes'
import { renderWithProviders } from 'helpers/test'

import { AuthenticationContainer } from './Authentication'

describe('<AuthenticationContainer />', () => {
  test('should render', () => {
    const { container } = renderWithProviders(<AuthenticationContainer />, {
      router: { route: allRoutes.auth.fullPath },
    })
    expect(container).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<AuthenticationContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
