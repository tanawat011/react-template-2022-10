import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { SubmitResult } from '../SubmitResult'
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

describe('<SubmitResult />', () => {
  test('match snapshot', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <SubmitResult
        roomId='room-id-xxx'
        playersInRoom={MOCK.PLAYER_HAS_COLOR_START_GAME}
        currentPlayer={MOCK.PLAYER_HAS_COLOR_START_GAME[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('disabled button after start game', async () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <SubmitResult
        roomId='room-id-xxx'
        playersInRoom={MOCK.THREE_PLAYER}
        currentPlayer={MOCK.THREE_PLAYER[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )

    expect(asFragment()).toBeTruthy()
  })

  test('disabled button after start game and submit result', async () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <SubmitResult
        roomId='room-id-xxx'
        playersInRoom={MOCK.PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT}
        currentPlayer={MOCK.PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )

    expect(asFragment()).toBeTruthy()
  })

  test('submit result', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <SubmitResult
          roomId='room-id-xxx'
          playersInRoom={MOCK.PLAYER_HAS_COLOR_START_GAME}
          currentPlayer={MOCK.PLAYER_HAS_COLOR_START_GAME[0]}
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

  test('submitted result and some players has corrected', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <SubmitResult
          roomId='room-id-xxx'
          playersInRoom={MOCK.PLAYER_HAS_COLOR_START_GAME}
          currentPlayer={MOCK.PLAYER_HAS_COLOR_START_GAME[0]}
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

  test('submitted result and some players has corrected, but error', async () => {
    mocked(setPlayerInTheRoom).mockRejectedValue('error')
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <SubmitResult
          roomId='room-id-xxx'
          playersInRoom={MOCK.PLAYER_HAS_COLOR_START_GAME}
          currentPlayer={MOCK.PLAYER_HAS_COLOR_START_GAME[0]}
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
