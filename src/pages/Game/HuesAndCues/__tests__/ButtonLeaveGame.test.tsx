import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonLeaveGame } from '../ButtonLeaveGame'
import { getMockPlayersInRoom, getMockRoom } from '../mock'
import { deletePlayer, deleteRoomPlayer } from '../services'

jest.mock('../services')

describe('<ButtonLeaveGame />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isOwner: true },
    })

    await act(async () => {
      el = renderWithProviders(<ButtonLeaveGame room={room} currRoomPlayer={players[0]} />)
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(deleteRoomPlayer).toHaveBeenCalledTimes(1)
      expect(deletePlayer).toHaveBeenCalledTimes(1)
      expect(el.asFragment()).toMatchSnapshot()
    })
  })
})
