import type { RenderResult } from '@testing-library/react'
import type { ButtonProps } from 'components/Button'

import { waitFor, screen, act } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { fetchApi } from 'helpers/api'
import { renderWithProviders } from 'helpers/test'

import { Example } from './Example'

jest.mock('components/Button', () => ({
  Button: (props: ButtonProps) => <button {...props} data-testid={props.label || props.children} />,
}))

jest.mock('helpers/api')

describe('<Example />', () => {
  test('should render', async () => {
    mocked(fetchApi).mockResolvedValue({ data: [{ id: 1, name: 'john' }] })

    await act(async () => {
      renderWithProviders(<Example />)
    })
    const el = screen.getByText(/learn react/i)
    expect(el).toBeInTheDocument()
  })

  test('match snapshot', async () => {
    mocked(fetchApi).mockResolvedValue({ data: [{ id: 2, name: 'doe' }] })

    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<Example />)
    })

    await waitFor(() => {
      expect(el.asFragment()).toMatchSnapshot()
    })
  })
})
