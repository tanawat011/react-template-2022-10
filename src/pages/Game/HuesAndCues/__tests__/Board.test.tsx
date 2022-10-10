import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { Board } from '../Board'
import { MOCK } from '../_mock'

jest.mock('../services')
jest.mock('../Common', () => ({
  ...jest.requireActual('../Common'),
  CellClickable: (props: React.HTMLAttributes<never>) => {
    return (
      <div {...props} data-testid={props.className}>
        {props.children}
      </div>
    )
  },
}))

describe('<Board />', () => {
  test('match snapshot', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <Board
        roomId='room-id-x'
        currentPlayer={MOCK.ONE_PLAYER[0]}
        playersInRoom={MOCK.ONE_PLAYER}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('the current player clicks the cell', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.ONE_PLAYER[0]}
          playersInRoom={MOCK.ONE_PLAYER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('the current player double clicks the cell', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.ONE_PLAYER[0]}
          playersInRoom={MOCK.ONE_PLAYER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('2 players, the current player is `hinter` and clicks the cell.', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.TWO_PLAYER[0]}
          playersInRoom={MOCK.TWO_PLAYER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('2 players, the current player is not `hinter` and clicks the cell.', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.TWO_PLAYER[1]}
          playersInRoom={MOCK.TWO_PLAYER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, the current player is `hinter` and clicks the cell.', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.THREE_PLAYER[0]}
          playersInRoom={MOCK.THREE_PLAYER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, the current player is not `hinter`, my turn and clicks the cell.', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.THREE_PLAYER[1]}
          playersInRoom={MOCK.THREE_PLAYER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, the current player is not `hinter` and clicks the cell.', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.THREE_PLAYER[2]}
          playersInRoom={MOCK.THREE_PLAYER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, the current player is not `hinter`, clicks the cell and is the turn of last player', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.THREE_PLAYER_LAST_IS_TURN[2]}
          playersInRoom={MOCK.THREE_PLAYER_LAST_IS_TURN}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('more than 2 players, the current player clicks the cell and the last player is hinter', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <Board
          roomId='room-id-x'
          currentPlayer={MOCK.THREE_PLAYER_LAST_IS_HINTER[1]}
          playersInRoom={MOCK.THREE_PLAYER_LAST_IS_HINTER}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('bg-[#612b10]')
    fireEvent.click(button)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
