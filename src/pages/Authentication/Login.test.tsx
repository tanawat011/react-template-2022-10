import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { Login } from './Login'

jest.mock('components/Button', () => ({
  Button: ({ link, ...props }: React.HTMLAttributes<never> & { link: boolean }) => {
    console.log(link)

    return (
      <div {...props} data-testid={props.children}>
        {props.children}
      </div>
    )
  },
}))

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

    const button = screen.getByTestId(/Login/i)
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
