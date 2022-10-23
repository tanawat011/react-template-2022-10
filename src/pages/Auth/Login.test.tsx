import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { Login } from './Login'

describe('<Login />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Login />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('submit form', async () => {
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<Login />)
    })

    const button = screen.getAllByTestId(/button/i)[0]
    fireEvent.submit(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
