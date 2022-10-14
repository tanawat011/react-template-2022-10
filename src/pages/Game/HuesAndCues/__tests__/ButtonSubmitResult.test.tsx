import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonSubmitResult } from '../ButtonSubmitResult'
import { getMockPlayersInRoom, getMockRoom } from '../mock'
import { setRoom, setRoomPlayer } from '../services'

jest.mock('../services')

describe('<ButtonSubmitResult />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true, hintSelected: 'A1' })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true, totalTurn: 2 },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonSubmitResult
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

  test('clicks and countable corrected score', async () => {
    let el: RenderResult
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true, hintSelected: 'A1' })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true, totalTurn: 2 },
      p2: { totalTurn: 2, allSelected: ['A1', 'A2'] },
      p3: { totalTurn: 2, allSelected: ['A3', 'A4'] },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonSubmitResult
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
        isSubmitResult: true,
      })

      // * Update player score
      expect(setRoomPlayer).toHaveBeenCalledTimes(3)
      expect(setRoomPlayer).toHaveBeenNthCalledWith(1, room.id, {
        ...players[1],
        score: 5,
        isTurn: false,
        totalTurn: 0,
      })
      expect(setRoomPlayer).toHaveBeenNthCalledWith(2, room.id, {
        ...players[2],
        score: 1,
        isTurn: false,
        totalTurn: 0,
      })

      // * Update hinter score
      expect(updateCurrRoomPlayer).toHaveBeenCalledTimes(1)
      expect(updateCurrRoomPlayer).toHaveBeenCalledWith({ ...players[0], score: 2, totalTurn: 0 })

      // * Button is disabled and correct render
      expect(button).toHaveAttribute('disabled')
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('disabled, when current player is not hinter', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    renderWithProviders(
      <ButtonSubmitResult
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
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    renderWithProviders(
      <ButtonSubmitResult
        room={room}
        currRoomPlayer={players[0]}
        roomPlayers={players}
        updateCurrRoomPlayer={updateCurrRoomPlayer}
      />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when some players are not completed 2 turns', async () => {
    const updateCurrRoomPlayer = jest.fn()
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 1 },
    })

    renderWithProviders(
      <ButtonSubmitResult
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
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    renderWithProviders(
      <ButtonSubmitResult
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
