import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { NextHinter } from '../NextHinter'
import { MOCK } from '../_mock'
import { setPlayerInTheRoom } from '../services'

jest.mock('components/Button', () => ({
  Button: (props: React.HTMLAttributes<never>) => {
    return (
      <div {...props} data-testid={'button'}>
        {props.children}
      </div>
    )
  },
}))

jest.mock('../services', () => ({
  setPlayerInTheRoom: jest.fn(),
}))

describe('<NextHinter />', () => {
  test('match snapshot', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <NextHinter
        roomId='room-id-xxx'
        playersInRoom={MOCK.THREE_PLAYER}
        currentPlayer={MOCK.THREE_PLAYER[0]}
        updateCurrentHinter={updateCurrentPlayer}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('2 players, clicks next hinter', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextHinter
          roomId='room-id-xxx'
          playersInRoom={MOCK.TWO_PLAYER}
          currentPlayer={MOCK.TWO_PLAYER[0]}
          updateCurrentHinter={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, clicks next hinter, but error', async () => {
    mocked(setPlayerInTheRoom).mockRejectedValue('')
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextHinter
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          updateCurrentHinter={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, clicks next hinter', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextHinter
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          updateCurrentHinter={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, clicks next hinter and next turn will turn back to first player', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextHinter
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER_SECOND_IS_HINTER}
          currentPlayer={MOCK.THREE_PLAYER_SECOND_IS_HINTER[1]}
          updateCurrentHinter={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, clicks next hinter and next hinter will turn back to first player', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextHinter
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER_LAST_IS_HINTER}
          currentPlayer={MOCK.THREE_PLAYER_LAST_IS_HINTER[2]}
          updateCurrentHinter={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, clicks next hinter and next player is hinter', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextHinter
          roomId='room-id-xxx'
          playersInRoom={MOCK.THREE_PLAYER_LAST_IS_HINTER}
          currentPlayer={MOCK.THREE_PLAYER_LAST_IS_HINTER[1]}
          updateCurrentHinter={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, disabled button', async () => {
    const updateCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <NextHinter
          roomId='room-id-xxx'
          playersInRoom={MOCK.PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT}
          currentPlayer={MOCK.PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT[0]}
          updateCurrentHinter={updateCurrentPlayer}
        />,
      )
    })

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
