import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { NextRound } from '../NextRound'
import { MOCK } from '../_mock'
import { setPlayerInTheRoom } from '../services'

jest.mock('../services', () => ({
  setPlayerInTheRoom: jest.fn(),
}))

describe('<NextRound />', () => {
  test('match snapshot', () => {
    const setCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <NextRound
        roomId='room-id-xxx'
        playersInRoom={MOCK.THREE_PLAYER}
        currentPlayer={MOCK.THREE_PLAYER[0]}
        setCurrentPlayer={setCurrentPlayer}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('clicks next round', async () => {
    const setCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextRound
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          setCurrentPlayer={setCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('clicks next round, but error', async () => {
    mocked(setPlayerInTheRoom).mockRejectedValue('')
    const setCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextRound
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          setCurrentPlayer={setCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('disabled button', async () => {
    const setCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextRound
          roomId='room-id-xxx'
          playersInRoom={MOCK.PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT}
          currentPlayer={MOCK.PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT[0]}
          setCurrentPlayer={setCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
