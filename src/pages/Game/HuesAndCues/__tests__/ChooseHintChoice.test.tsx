import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { renderWithProviders } from 'helpers/test'

import { ChooseHintChoice } from '../ChooseHintChoice'
import { getMockHintChoice, getMockPlayersInRoom, getMockRoom } from '../mock'
import { setRoom } from '../services'

jest.mock('../services')

describe('<ChooseHintChoice />', () => {
  test('clickable', async () => {
    let el: RenderResult
    const room = getMockRoom({ hintChoice: getMockHintChoice })
    const players = getMockPlayersInRoom({ p1: { isHinter: true } })

    await act(async () => {
      el = renderWithProviders(<ChooseHintChoice room={room} currRoomPlayer={players[0]} />)
    })

    const button = screen.getAllByTestId('button')[0]
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

    renderWithProviders(<ChooseHintChoice room={room} currRoomPlayer={players[1]} />)

    const button = screen.getAllByTestId('button')[0]

    expect(button).toHaveAttribute('disabled')
  })

  test('disabled, when `hinter` none selected hint', async () => {
    const room = getMockRoom({ hintChoice: getMockHintChoice })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
    })

    renderWithProviders(<ChooseHintChoice room={room} currRoomPlayer={players[0]} />)

    const button = screen.getAllByTestId('button')[0]

    expect(button).not.toHaveAttribute('disabled')
  })

  test('disabled, when `hinter` selected hint', async () => {
    const room = getMockRoom({ hintChoice: getMockHintChoice, hintSelected: 'A1' })
    const players = getMockPlayersInRoom({
      p1: { isHinter: true },
    })

    renderWithProviders(<ChooseHintChoice room={room} currRoomPlayer={players[0]} />)

    const button = screen.getAllByTestId('button')[0]

    expect(button).toHaveAttribute('disabled')
  })
})
