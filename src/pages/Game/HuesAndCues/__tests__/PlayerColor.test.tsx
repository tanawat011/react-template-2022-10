import { renderWithProviders } from 'helpers/test'

import { PlayerColor } from '../PlayerColor'
import { MOCK } from '../_mock'

describe('<PlayerColor />', () => {
  test('match snapshot', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <PlayerColor
        playersInRoom={MOCK.PLAYER_HAS_COLOR}
        currentPlayer={MOCK.PLAYER_HAS_COLOR[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('all players no color', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <PlayerColor
        playersInRoom={MOCK.PLAYER_HAS_COLOR}
        currentPlayer={MOCK.PLAYER_HAS_COLOR[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )
    expect(asFragment()).toBeTruthy()
  })
})
