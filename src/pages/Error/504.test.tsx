import { renderWithProviders } from 'helpers/test'

import { Error504 } from './504'

describe('<Error504 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error504 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
