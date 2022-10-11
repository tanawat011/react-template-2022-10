import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { ChooseColorToken } from '../ChooseColorToken'
import { MOCK } from '../_mock'

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

describe('<ChooseColorToken />', () => {
  test('match snapshot', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <ChooseColorToken
        playersInRoom={MOCK.PLAYER_NO_COLOR}
        currentPlayer={MOCK.PLAYER_NO_COLOR[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('current player selecting color token', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <ChooseColorToken
          playersInRoom={MOCK.PLAYER_NO_COLOR}
          currentPlayer={MOCK.PLAYER_NO_COLOR[0]}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getAllByTestId('bg-transparent')[5]
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('some players has color token', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <ChooseColorToken
        playersInRoom={MOCK.PLAYER_HAS_COLOR}
        currentPlayer={MOCK.PLAYER_HAS_COLOR[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )
    expect(asFragment()).toBeTruthy()
  })
})
