import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonNextTurn } from '../ButtonNextTurn'
import { getMockPlayersInRoom, getMockRoom } from '../mock'
import { setRoomPlayer } from '../services'

jest.mock('../services')

describe('<ButtonNextTurn />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1, isTurn: true },
      p3: { totalTurn: 1 },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonNextTurn
          room={room}
          currRoomPlayer={players[1]}
          roomPlayers={players}
          updateCurrRoomPlayer={updateCurrRoomPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    expect(button).not.toHaveAttribute('disabled')
    fireEvent.click(button)

    await waitFor(() => {
      expect(button).toHaveAttribute('disabled')
      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('clicks and next turn to the next player', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1, isTurn: true },
      p3: { totalTurn: 1 },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonNextTurn
          room={room}
          currRoomPlayer={players[1]}
          roomPlayers={players}
          updateCurrRoomPlayer={updateCurrRoomPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    expect(button).not.toHaveAttribute('disabled')
    fireEvent.click(button)

    await waitFor(() => {
      // * Update player
      expect(setRoomPlayer).toHaveBeenCalledTimes(2)
      expect(setRoomPlayer).toHaveBeenNthCalledWith(1, room.id, {
        ...players[1],
        isTurn: false,
        totalTurn: 2,
      })
      expect(setRoomPlayer).toHaveBeenNthCalledWith(2, room.id, {
        ...players[2],
        isTurn: true,
      })

      // * Update current player
      expect(updateCurrRoomPlayer).toHaveBeenCalledTimes(1)
      expect(updateCurrRoomPlayer).toHaveBeenCalledWith({
        ...players[1],
        isTurn: false,
        totalTurn: 2,
      })

      // * Button is disabled and correct render
      expect(button).toHaveAttribute('disabled')
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('clicks and next turn to the next player, but the next player is loop back to the first sequence', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1 },
      p3: { totalTurn: 1, isTurn: true },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonNextTurn
          room={room}
          currRoomPlayer={players[2]}
          roomPlayers={players}
          updateCurrRoomPlayer={updateCurrRoomPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    expect(button).not.toHaveAttribute('disabled')
    fireEvent.click(button)

    await waitFor(() => {
      // * Update player
      expect(setRoomPlayer).toHaveBeenCalledTimes(2)
      expect(setRoomPlayer).toHaveBeenNthCalledWith(1, room.id, {
        ...players[2],
        isTurn: false,
        totalTurn: 2,
      })
      expect(setRoomPlayer).toHaveBeenNthCalledWith(2, room.id, {
        ...players[0],
        isTurn: true,
      })

      // * Update current player
      expect(updateCurrRoomPlayer).toHaveBeenCalledTimes(1)
      expect(updateCurrRoomPlayer).toHaveBeenCalledWith({
        ...players[2],
        isTurn: false,
        totalTurn: 2,
      })

      // * Button is disabled and correct render
      expect(button).toHaveAttribute('disabled')
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('disabled, when still not start the game', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1 },
      p3: { totalTurn: 1 },
    })

    renderWithProviders(
      <ButtonNextTurn
        room={room}
        currRoomPlayer={players[0]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when submitted result', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true, isSubmitResult: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1 },
      p3: { totalTurn: 1 },
    })

    renderWithProviders(
      <ButtonNextTurn
        room={room}
        currRoomPlayer={players[0]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when not the turn of the player', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1 },
      p3: { totalTurn: 1, isTurn: true },
    })

    renderWithProviders(
      <ButtonNextTurn
        room={room}
        currRoomPlayer={players[1]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when the player already submit 2 times', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2, isTurn: true },
      p3: { totalTurn: 2 },
    })

    renderWithProviders(
      <ButtonNextTurn
        room={room}
        currRoomPlayer={players[2]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })
})
