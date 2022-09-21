import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { Error404 } from './404'

describe('<Error404 />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Error404 />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('match snapshot with click back to previous page', async () => {
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<Error404 />)
    })

    const button = screen.getByTestId(/button/i)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toMatchSnapshot()
    })
  })
})
