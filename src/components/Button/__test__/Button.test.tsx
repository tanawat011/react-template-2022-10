import { render, screen } from '@testing-library/react'

import { Button } from '../Button'

describe('<Button />', () => {
  test('should render', () => {
    render(<Button label='test' />)
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Button label='test' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render with default setting', () => {
    render(<Button label='test' color='primary' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveClass('bg-blue-500')
  })

  test('should render primary button', () => {
    render(<Button label='test' color='primary' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveClass('bg-blue-500')
  })

  test('should render secopndary button', () => {
    render(<Button label='test' color='secondary' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveClass('bg-gray-500')
  })

  test('should render ternary button', () => {
    render(<Button label='test' color='ternary' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveClass('bg-yellow-500')
  })

  test('should render with child node', () => {
    render(<Button>button child</Button>)
    const button = screen.getByText(/button child/i)
    expect(button).toBeInTheDocument()
  })
})
