import { renderWithProviders } from 'helpers/test'

import { GameHuesAndCues } from './HuesAndCues'

describe('<GameHuesAndCues />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<GameHuesAndCues />)
    expect(asFragment()).toMatchSnapshot()
  })
})
