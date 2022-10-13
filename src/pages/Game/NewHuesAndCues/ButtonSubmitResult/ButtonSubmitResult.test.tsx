import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { getMockPlayersInRoom, getMockRoom } from '../mock'

import { ButtonSubmitResult } from './ButtonSubmitResult'

describe('<ButtonSubmitResult />', () => {
  test('clickable before click button', async () => {
    let el: RenderResult
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true, totalTurn: 2 },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    await act(async () => {
      el = renderWithProviders(
        <ButtonSubmitResult room={room} currRoomPlayer={players[0]} roomPlayers={players} />,
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

  test('disabled, when current player is not hinter', async () => {
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    renderWithProviders(
      <ButtonSubmitResult room={room} currRoomPlayer={players[1]} roomPlayers={players} />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when still not start the game', async () => {
    const room = getMockRoom()
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    renderWithProviders(
      <ButtonSubmitResult room={room} currRoomPlayer={players[0]} roomPlayers={players} />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when some players are not completed 2 turns', async () => {
    const room = getMockRoom({ isStarted: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 1 },
    })

    renderWithProviders(
      <ButtonSubmitResult room={room} currRoomPlayer={players[0]} roomPlayers={players} />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when submitted result', async () => {
    const room = getMockRoom({ isStarted: true, isSubmitResult: true })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
      p2: { totalTurn: 2 },
      p3: { totalTurn: 2 },
    })

    renderWithProviders(
      <ButtonSubmitResult room={room} currRoomPlayer={players[0]} roomPlayers={players} />,
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })
})
