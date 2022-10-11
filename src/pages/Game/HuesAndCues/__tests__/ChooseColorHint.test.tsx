import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { ChooseColorHint } from '../ChooseColorHint'
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

describe('<ChooseColorHint />', () => {
  test('match snapshot', () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <ChooseColorHint
        currentPlayer={MOCK.HINTER_NO_CHOICE[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('current player click random 4 color for hint', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <ChooseColorHint
          currentPlayer={MOCK.HINTER_NO_CHOICE[0]}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('current player selecting choice', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <ChooseColorHint
          currentPlayer={MOCK.HINTER_NO_SELECT_CHOICE[0]}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getAllByTestId('bg-[#fbab2b]')[0]
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('current player selecting choice, but has choice', async () => {
    let el: RenderResult

    const updateCurrentPlayer = jest.fn()

    await act(async () => {
      el = renderWithProviders(
        <ChooseColorHint
          currentPlayer={MOCK.HINTER_SELECTED_CHOICE[0]}
          updateCurrentPlayer={updateCurrentPlayer}
        />,
      )
    })

    const button = screen.getAllByTestId('bg-[#fbab2b]')[0]
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('current player selected choice', async () => {
    const updateCurrentPlayer = jest.fn()

    const { asFragment } = renderWithProviders(
      <ChooseColorHint
        currentPlayer={MOCK.HINTER_SELECTED_CHOICE[0]}
        updateCurrentPlayer={updateCurrentPlayer}
      />,
    )

    expect(asFragment()).toBeTruthy()
  })
})
