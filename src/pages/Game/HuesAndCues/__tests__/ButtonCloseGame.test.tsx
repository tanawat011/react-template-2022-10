import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonCloseGame } from '../ButtonCloseGame'
import { getMockPlayersInRoom, getMockRoom } from '../mock'
import { deleteAllGlobalPlayers, deleteRoom } from '../services'

jest.mock('../services')

describe('<ButtonCloseGame />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isOwner: true },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonCloseGame room={room} roomPlayers={players} currRoomPlayer={players[0]} />,
      )
    })

    const button = screen.getByTestId('button')
    expect(button).not.toHaveAttribute('disabled')
    fireEvent.click(button)

    await waitFor(() => {
      expect(deleteRoom).toHaveBeenCalledTimes(1)
      expect(deleteAllGlobalPlayers).toHaveBeenCalledTimes(1)
      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('disabled, when current player is not a `owner`', async () => {
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isOwner: true },
    })

    renderWithProviders(
      <ButtonCloseGame room={room} roomPlayers={players} currRoomPlayer={players[1]} />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })
})
