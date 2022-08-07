import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Example } from './Example'

import type { ButtonProps } from 'components/Button'

jest.mock('components/Button', () => ({
  Button: (props: ButtonProps) => <button {...props} data-testid={props.label || props.children} />,
}))

describe('<Example />', () => {
  test('should render', () => {
    render(<Example />, { wrapper: BrowserRouter })
    const el = screen.getByText(/learn react/i)
    expect(el).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Example />, { wrapper: BrowserRouter })
    expect(asFragment()).toMatchSnapshot()
  })
})
