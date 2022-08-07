import { render, screen } from '@testing-library/react'

import { Example } from './Example'

import type { ButtonProps } from 'components/Button'

jest.mock('components/Button', () => ({
  Button: (props: ButtonProps) => <button {...props} data-testid={props.label || props.children} />,
}))

describe('<Example />', () => {
  test('should render', () => {
    render(<Example />)
    const el = screen.getByText(/learn react/i)
    expect(el).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Example />)
    expect(asFragment()).toMatchSnapshot()
  })
})
