import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ButtonDangerMenu } from '../ButtonDangerMenu'
import { getMockPlayersInRoom, getMockRoom } from '../mock'

jest.mock('../services')
jest.mock('../ButtonCloseGame')
jest.mock('../ButtonLeaveGame')
jest.mock('../ButtonRestartGame')

describe('<ButtonDangerMenu />', () => {
  test('clickable open menu', async () => {
    let el: RenderResult
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isOwner: true },
    })

    await act(async () => {
      el = renderWithProviders(
        <>
          <div data-testid='outside-el'>Outside EL</div>
          <ButtonDangerMenu room={room} roomPlayers={players} currRoomPlayer={players[0]} />
        </>,
      )
    })

    await waitFor(() => {
      expect(el.asFragment()).toMatchSnapshot()
      const buttonOpenMenu = screen.getByTestId('button')
      fireEvent.click(buttonOpenMenu)
    })

    await waitFor(() => {
      const buttons = screen.getAllByTestId('button')
      expect(buttons).toHaveLength(4)
      expect(el.asFragment()).toMatchSnapshot()
    })

    await waitFor(() => {
      const outsideEl = screen.getByTestId('outside-el')
      fireEvent.mouseDown(outsideEl)
      const buttons = screen.getAllByTestId('button')
      expect(buttons).toHaveLength(1)
      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('clickable open menu, but current player are not `owner`', async () => {
    let el: RenderResult
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isOwner: true },
    })

    await act(async () => {
      el = renderWithProviders(
        <>
          <div data-testid='outside-el'>Outside EL</div>
          <ButtonDangerMenu room={room} roomPlayers={players} currRoomPlayer={players[1]} />
        </>,
      )
    })

    await waitFor(() => {
      expect(el.asFragment()).toMatchSnapshot()
      const buttonOpenMenu = screen.getByTestId('button')
      fireEvent.click(buttonOpenMenu)
    })

    await waitFor(() => {
      const buttons = screen.getAllByTestId('button')
      expect(buttons).toHaveLength(2)
      expect(el.asFragment()).toMatchSnapshot()
    })

    await waitFor(() => {
      const outsideEl = screen.getByTestId('outside-el')
      fireEvent.mouseDown(outsideEl)
      const buttons = screen.getAllByTestId('button')
      expect(buttons).toHaveLength(1)
      expect(el.asFragment()).toMatchSnapshot()
    })
  })
})
