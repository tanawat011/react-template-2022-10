import type { RoomPlayer } from '../_type'
import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, act, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { HuesAndCues } from '../HuesAndCues'
import { MOCK } from '../_mock'
import { getAllPlayersInTheRoom, getPlayerInTheRoom, subscribeRoom } from '../services'

jest.mock('../Board', () => ({
  Board: () => <div>Board</div>,
}))

jest.mock('../ChooseColorHint', () => ({
  ChooseColorHint: () => <div>ChooseColorHint</div>,
}))

jest.mock('../ChooseColorToken', () => ({
  ChooseColorToken: () => <div>ChooseColorToken</div>,
}))

jest.mock('../NextHinter', () => ({
  NextHinter: () => <div>NextHinter</div>,
}))

jest.mock('../NextRound', () => ({
  NextRound: () => <div>NextRound</div>,
}))

jest.mock('../PlayerColor', () => ({
  PlayerColor: () => <div>PlayerColor</div>,
}))

jest.mock('../RemoveRoom', () => ({
  RemoveRoom: () => <div>RemoveRoom</div>,
}))

jest.mock('../ResetRoom', () => ({
  ResetRoom: () => <div>ResetRoom</div>,
}))

jest.mock('../ScoreBoard', () => ({
  ScoreBoard: () => <div>ScoreBoard</div>,
}))

jest.mock('../StartGame', () => ({
  StartGame: ({ updateCurrentPlayer }: { updateCurrentPlayer: (payload: RoomPlayer) => void }) => (
    <div data-testid='button' onClick={() => updateCurrentPlayer(MOCK.THREE_PLAYER[0])}>
      StartGame
    </div>
  ),
}))

jest.mock('../SubmitResult', () => ({
  SubmitResult: () => <div>SubmitResult</div>,
}))

jest.mock('../services', () => ({
  getAllPlayersInTheRoom: jest.fn(),
  getPlayerInTheRoom: jest.fn(),
  setPlayerInTheRoom: jest.fn(),
  subscribeRoom: jest.fn(),
  toSetDisplayRoom: jest.fn(),
}))

describe('<HuesAndCues />', () => {
  test('match snapshot', async () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    mocked(getAllPlayersInTheRoom).mockResolvedValue(MOCK.THREE_PLAYER)
    mocked(getPlayerInTheRoom).mockResolvedValue(MOCK.THREE_PLAYER[0])
    mocked(subscribeRoom).mockImplementation(
      (_: unknown, callback: (payload: RoomPlayer[]) => void) => {
        callback(MOCK.THREE_PLAYER)

        return jest.fn()
      },
    )

    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<HuesAndCues />)
    })

    await waitFor(() => {
      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('no one players in the room', async () => {
    mocked(getAllPlayersInTheRoom).mockResolvedValue([])
    mocked(subscribeRoom).mockImplementation(
      (_: unknown, callback: (payload: RoomPlayer[]) => void) => {
        callback(MOCK.THREE_PLAYER)

        return jest.fn()
      },
    )

    const { asFragment } = renderWithProviders(<HuesAndCues />)

    expect(asFragment()).toBeTruthy()
  })

  test('no session id', async () => {
    mocked(getAllPlayersInTheRoom).mockResolvedValue(MOCK.THREE_PLAYER)
    mocked(getPlayerInTheRoom).mockResolvedValue(MOCK.THREE_PLAYER[0])
    mocked(subscribeRoom).mockImplementation(
      (_: unknown, callback: (payload: RoomPlayer[]) => void) => {
        callback(MOCK.THREE_PLAYER)

        return jest.fn()
      },
    )

    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<HuesAndCues />)
    })

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('the owner clicks start game', async () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    mocked(getAllPlayersInTheRoom).mockResolvedValue(MOCK.PLAYER_HAS_COLOR)
    mocked(getPlayerInTheRoom).mockResolvedValue(MOCK.PLAYER_HAS_COLOR[0])
    mocked(subscribeRoom).mockImplementation(
      (_: unknown, callback: (payload: RoomPlayer[]) => void) => {
        callback(MOCK.PLAYER_HAS_COLOR)

        return jest.fn()
      },
    )

    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<HuesAndCues />)
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('game is started', async () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    mocked(getAllPlayersInTheRoom).mockResolvedValue(MOCK.PLAYER_HAS_COLOR_START_GAME)
    mocked(getPlayerInTheRoom).mockResolvedValue(MOCK.PLAYER_HAS_COLOR_START_GAME[0])
    mocked(subscribeRoom).mockImplementation(
      (_: unknown, callback: (payload: RoomPlayer[]) => void) => {
        callback(MOCK.PLAYER_HAS_COLOR_START_GAME)

        return jest.fn()
      },
    )

    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<HuesAndCues />)
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
