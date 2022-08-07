import { render, screen, fireEvent, act } from '@testing-library/react'

import { Example2 } from './Example2'

import type { ButtonProps } from 'components/Button'

jest.mock('components/Button', () => ({
  Button: (props: ButtonProps) => <button {...props} data-testid={props.label || props.children} />,
}))

describe('<Example />', () => {
  test('should render', () => {
    render(<Example2 />)
    const el = screen.getByText(/learn react/i)
    expect(el).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Example2 />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render 3 button', () => {
    render(<Example2 />)
    const totalButton = screen.getAllByRole('button').length
    expect(totalButton).toEqual(3)
  })

  test('should toggle to thai language', () => {
    render(<Example2 />)
    const button = screen.getByTestId(/Toggle Lang TH/i)
    fireEvent.click(button)

    const el = screen.getByText(/แก้ไข/i)
    expect(el).toBeInTheDocument()
  })

  test('should toggle to english language', () => {
    render(<Example2 />)
    const button = screen.getByTestId(/Toggle Lang EN/i)
    fireEvent.click(button)

    const el = screen.getByText(/Edit/i)
    expect(el).toBeInTheDocument()
  })

  test('should display error message when click submit form', async () => {
    render(<Example2 />)

    const button = screen.getByTestId('Submit')

    await act(async () => {
      fireEvent.click(button)
    })

    const el = screen.getByText(/input is required/i)
    expect(el).toBeInTheDocument()
  })
})
