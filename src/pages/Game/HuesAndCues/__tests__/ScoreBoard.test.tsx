import { renderWithProviders } from 'helpers/test'

import { ScoreBoard } from '../ScoreBoard'
import { MOCK } from '../_mock'

describe('<ScoreBoard />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<ScoreBoard playersInRoom={MOCK.THREE_PLAYER} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('some players has the score', () => {
    const { asFragment } = renderWithProviders(<ScoreBoard playersInRoom={MOCK.THREE_PLAYER} />)

    expect(asFragment()).toBeTruthy()
  })
})
