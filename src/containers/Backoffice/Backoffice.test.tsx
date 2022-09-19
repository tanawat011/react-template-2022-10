import { renderWithProviders } from 'helpers/test'

import { BackofficeContainer } from './Backoffice'

describe('<BackofficeContainer />', () => {
  test('should render', () => {
    const { container } = renderWithProviders(<BackofficeContainer />)
    expect(container).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<BackofficeContainer />, {
      router: { route: '/backoffice/home' },
    })
    expect(asFragment()).toMatchSnapshot()
  })
})
