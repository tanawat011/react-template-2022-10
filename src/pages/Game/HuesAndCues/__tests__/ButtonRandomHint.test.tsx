import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonRandomHint } from '../ButtonRandomHint'
import { getMockHintChoice, getMockPlayersInRoom, getMockRoom } from '../mock'
import { setRoom } from '../services'

jest.mock('../services')

describe('<ButtonRandomHint />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const room = getMockRoom()
    const players = getMockPlayersInRoom({ p1: { isHinter: true } })

    await act(async () => {
      el = renderWithProviders(<ButtonRandomHint room={room} currRoomPlayer={players[0]} />)
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(setRoom).toHaveBeenCalledTimes(1)
      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('disabled, when current player are not a `hinter`', async () => {
    const room = getMockRoom({ hintChoice: getMockHintChoice })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
    })

    renderWithProviders(<ButtonRandomHint room={room} currRoomPlayer={players[1]} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when `hinter` none hint choices', async () => {
    const room = getMockRoom({ hintChoice: getMockHintChoice })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
    })

    renderWithProviders(<ButtonRandomHint room={room} currRoomPlayer={players[0]} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when `player` none hint choices', async () => {
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
    })

    renderWithProviders(<ButtonRandomHint room={room} currRoomPlayer={players[1]} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })
})
