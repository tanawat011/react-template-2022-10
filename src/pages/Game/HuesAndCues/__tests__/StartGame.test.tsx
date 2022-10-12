import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { StartGame } from '../StartGame'
import { MOCK } from '../_mock'
import { setPlayerInTheRoom } from '../services'

jest.mock('components/Button', () => ({
  Button: (props: React.HTMLAttributes<never>) => {
    return (
      <button {...props} data-testid={'button'}>
        {props.children}
      </button>
    )
  },
}))

jest.mock('../services', () => ({
  setPlayerInTheRoom: jest.fn(),
}))

describe('<StartGame />', () => {
  test('match snapshot', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <StartGame
        roomId='room-id-xxx'
        playersInRoom={MOCK.THREE_PLAYER}
        currentPlayer={MOCK.THREE_PLAYER[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('start game', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <StartGame
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('start game, but error', async () => {
    mocked(setPlayerInTheRoom).mockRejectedValue('error')
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <StartGame
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('start game, but no player in next turn', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <StartGame
          roomId='room-id-xxx'
          playersInRoom={MOCK.ONE_PLAYER}
          currentPlayer={MOCK.ONE_PLAYER[0]}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
