import { render, screen } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { Button } from './Button'

jest.mock('./Button', () => jest.requireActual('./Button'))

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
    expect(button).toHaveStyleRule('background-color', 'rgb(24 28 35 / var(--tw-bg-opacity))')
  })

  test('should render primary button', () => {
    render(<Button label='test' color='primary' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveStyleRule('background-color', 'rgb(24 28 35 / var(--tw-bg-opacity))')
  })

  test('should render secondary button', () => {
    render(<Button label='test' color='secondary' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveStyleRule('background-color', 'rgb(23 98 193 / var(--tw-bg-opacity))')
  })

  test('should render ternary button', () => {
    render(<Button label='test' color='ternary' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveStyleRule('background-color', 'rgb(229 240 252 / var(--tw-bg-opacity))')
  })

  test('should render with child node', () => {
    render(<Button>button child</Button>)
    const button = screen.getByText(/button child/i)
    expect(button).toBeInTheDocument()
  })

  test('should render disabled button', () => {
    render(<Button label='test' disabled />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveAttribute('disabled')
    expect(button).toHaveStyleRule('background-color', 'rgb(215 219 224 / var(--tw-bg-opacity))', {
      modifier: ':disabled',
    })
  })

  test('should render link button', () => {
    renderWithProviders(<Button link label='test' />)
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveStyleRule('background-color', 'rgb(24 28 35 / var(--tw-bg-opacity))')
  })

  test('should render link button with child label', () => {
    renderWithProviders(
      <Button link label='test'>
        test
      </Button>,
    )
    const button = screen.getByTestId(/button/i)
    expect(button).toHaveStyleRule('background-color', 'rgb(24 28 35 / var(--tw-bg-opacity))')
  })
})
