import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonNextHinter } from '../ButtonNextHinter'
import { getMockPlayersInRoom, getMockRoom } from '../mock'
import { setRoom, setRoomPlayer } from '../services'

jest.mock('../services')

describe('<ButtonNextHinter />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true, isSubmitResult: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true, isTurn: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonNextHinter
          room={room}
          currRoomPlayer={players[0]}
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

  test('clicks and next turn together with next hinter to the next player', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true, isSubmitResult: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true, isTurn: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonNextHinter
          room={room}
          currRoomPlayer={players[0]}
          roomPlayers={players}
          updateCurrRoomPlayer={updateCurrRoomPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    expect(button).not.toHaveAttribute('disabled')
    fireEvent.click(button)

    await waitFor(() => {
      // * Update room
      expect(setRoom).toHaveBeenCalledTimes(1)
      expect(setRoom).toHaveBeenCalledWith({
        ...room,
        totalRound: room.totalRound + 1,
        isSubmitResult: false,
      })

      // * Update player
      expect(setRoomPlayer).toHaveBeenCalledTimes(2)
      expect(setRoomPlayer).toHaveBeenNthCalledWith(1, room.id, {
        ...players[0],
        isHinter: false,
        isTurn: false,
      })
      expect(setRoomPlayer).toHaveBeenNthCalledWith(2, room.id, {
        ...players[1],
        isHinter: true,
        isTurn: true,
      })

      // * Update current player
      expect(updateCurrRoomPlayer).toHaveBeenCalledTimes(1)
      expect(updateCurrRoomPlayer).toHaveBeenCalledWith({
        ...players[0],
        isHinter: false,
        isTurn: false,
      })

      // * Button is disabled and correct render
      expect(button).toHaveAttribute('disabled')
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('clicks and next turn together with next hinter to the next player, but the next player is loop back to the first sequence', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true, isSubmitResult: true })
    const players = getMockPlayersInRoom({
      p1: { totalTurn: 2 },
      p2: { totalTurn: 2 },
      p3: { isHinter: true, isTurn: true },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonNextHinter
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
      // * Update room
      expect(setRoom).toHaveBeenCalledTimes(1)
      expect(setRoom).toHaveBeenCalledWith({
        ...room,
        totalRound: room.totalRound + 1,
        isSubmitResult: false,
      })

      // * Update player
      expect(setRoomPlayer).toHaveBeenCalledTimes(2)
      expect(setRoomPlayer).toHaveBeenNthCalledWith(1, room.id, {
        ...players[2],
        isHinter: false,
        isTurn: false,
      })
      expect(setRoomPlayer).toHaveBeenNthCalledWith(2, room.id, {
        ...players[0],
        isHinter: true,
        isTurn: true,
      })

      // * Update current player
      expect(updateCurrRoomPlayer).toHaveBeenCalledTimes(1)
      expect(updateCurrRoomPlayer).toHaveBeenCalledWith({
        ...players[2],
        isHinter: false,
        isTurn: false,
      })

      // * Button is disabled and correct render
      expect(button).toHaveAttribute('disabled')
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('disabled, when current player is not a `hinter`', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true, isSubmitResult: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1 },
      p3: { totalTurn: 1 },
    })

    renderWithProviders(
      <ButtonNextHinter
        room={room}
        currRoomPlayer={players[1]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when still not start the game', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isSubmitResult: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1 },
      p3: { totalTurn: 1 },
    })

    renderWithProviders(
      <ButtonNextHinter
        room={room}
        currRoomPlayer={players[0]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when are not submit result', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 1 },
      p3: { totalTurn: 1 },
    })

    renderWithProviders(
      <ButtonNextHinter
        room={room}
        currRoomPlayer={players[0]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })
})
