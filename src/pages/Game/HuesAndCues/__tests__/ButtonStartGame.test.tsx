import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonStartGame } from '../ButtonStartGame'
import { getMockPlayersInRoom, getMockRoom } from '../mock'
import { setRoom } from '../services'

jest.mock('../services')

describe('<ButtonStartGame />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isOwner: true, isHinter: true, isTurn: true },
      p2: { totalTurn: 0 },
      p3: { totalTurn: 0 },
    })

    await act(async () => {
      el = renderWithProviders(<ButtonStartGame room={room} currRoomPlayer={players[0]} />)
    })

    const button = screen.getByTestId('button')
    expect(button).not.toHaveAttribute('disabled')
    fireEvent.click(button)

    await waitFor(() => {
      // * Update room
      expect(setRoom).toHaveBeenCalledTimes(1)
      expect(setRoom).toHaveBeenCalledWith({
        ...room,
        isStarted: true,
      })

      // * Button is disabled and correct render
      expect(button).toHaveAttribute('disabled')
      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('disabled, when current player is not a `owner`', async () => {
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isOwner: true, isHinter: true, isTurn: true },
      p2: { totalTurn: 0 },
      p3: { totalTurn: 0 },
    })

    renderWithProviders(<ButtonStartGame room={room} currRoomPlayer={players[1]} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when still not start the game', async () => {
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isOwner: true, isHinter: true, isTurn: true },
      p2: { totalTurn: 0 },
      p3: { totalTurn: 0 },
    })

    renderWithProviders(<ButtonStartGame room={room} currRoomPlayer={players[0]} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })
})
