import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, act, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { ResetRoom } from '../ResetRoom'
import { MOCK } from '../_mock'
import { getAllPlayersInTheRoom } from '../services'

jest.mock('components/Button', () => ({
  Button: (props: React.HTMLAttributes<never>) => {
    return (
      <div {...props} data-testid={'button'}>
        {props.children}
      </div>
    )
  },
}))

jest.mock('../services', () => ({
  getAllPlayersInTheRoom: jest.fn(),
  setPlayerInTheRoom: jest.fn(),
}))

describe('<ResetRoom />', () => {
  test('match snapshot', () => {
    const setCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <ResetRoom
        roomId={'room-id-xxx'}
        currentPlayer={MOCK.THREE_PLAYER[0]}
        setCurrentPlayer={setCurrentPlayer}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('clicks reset room', async () => {
    mocked(getAllPlayersInTheRoom).mockResolvedValue(MOCK.THREE_PLAYER)
    const setCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <ResetRoom
          roomId={'room-id-xxx'}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          setCurrentPlayer={setCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('clicks reset room, but error', async () => {
    mocked(getAllPlayersInTheRoom).mockRejectedValue('error')
    const setCurrentPlayer = jest.fn()
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(
        <ResetRoom
          roomId={'room-id-xxx'}
          currentPlayer={MOCK.THREE_PLAYER[0]}
          setCurrentPlayer={setCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
