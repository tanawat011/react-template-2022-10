import { renderWithProviders } from 'helpers/test'

import { HuesAndCues } from './HuesAndCues'

describe('<HuesAndCues />', () => {
  test('render snapshot', async () => {
    const { asFragment } = renderWithProviders(<HuesAndCues />)

    expect(asFragment()).toMatchSnapshot()
  })
})
