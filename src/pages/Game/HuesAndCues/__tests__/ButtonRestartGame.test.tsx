import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonRestartGame } from '../ButtonRestartGame'
import { getMockPlayersInRoom, getMockRoom } from '../mock'
import { setRoom, setRoomPlayer } from '../services'

jest.mock('../services')

describe('<ButtonRestartGame />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isOwner: true },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonRestartGame room={room} roomPlayers={players} currRoomPlayer={players[0]} />,
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
        isStarted: false,
        hintChoice: [],
        hintSelected: '',
        isSubmitResult: false,
        totalRound: 0,
      })

      // * Update player
      expect(setRoomPlayer).toHaveBeenCalledTimes(3)
      expect(setRoomPlayer).toHaveBeenNthCalledWith(1, room.id, {
        ...players[0],
        allSelected: [],
        isHinter: true,
        isTurn: true,
        score: 0,
        totalTurn: 0,
      })
      expect(setRoomPlayer).toHaveBeenNthCalledWith(2, room.id, {
        ...players[1],
        allSelected: [],
        isHinter: false,
        isTurn: false,
        score: 0,
        totalTurn: 0,
      })
      expect(setRoomPlayer).toHaveBeenNthCalledWith(3, room.id, {
        ...players[2],
        allSelected: [],
        isHinter: false,
        isTurn: false,
        score: 0,
        totalTurn: 0,
      })

      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('disabled, when current player is not a `owner`', async () => {
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isOwner: true },
    })

    renderWithProviders(
      <ButtonRestartGame room={room} roomPlayers={players} currRoomPlayer={players[1]} />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })
})
