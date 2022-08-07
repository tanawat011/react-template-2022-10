import type { ButtonProps } from 'components/Button'

import { screen, fireEvent, act } from '@testing-library/react'

import { renderWithProviders } from 'helpers/testUtils'

import { Example2 } from './Example2'

jest.mock('components/Button', () => ({
  Button: (props: ButtonProps) => <button {...props} data-testid={props.label || props.children} />,
}))

describe('<Example2 />', () => {
  test('should render', () => {
    renderWithProviders(<Example2 />)
    const el = screen.getByText(/learn react/i)
    expect(el).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Example2 />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render 3 button', () => {
    renderWithProviders(<Example2 />)
    const totalButton = screen.getAllByRole('button').length
    expect(totalButton).toEqual(3)
  })

  test('should toggle to thai language', () => {
    renderWithProviders(<Example2 />)
    const button = screen.getByTestId(/Toggle Lang TH/i)
    fireEvent.click(button)

    const el = screen.getByText(/แก้ไข/i)
    expect(el).toBeInTheDocument()
  })

  test('should toggle to english language', () => {
    renderWithProviders(<Example2 />)
    const button = screen.getByTestId(/Toggle Lang EN/i)
    fireEvent.click(button)

    const el = screen.getByText(/Edit/i)
    expect(el).toBeInTheDocument()
  })

  test('should display error message when click submit form', async () => {
    renderWithProviders(<Example2 />)

    const button = screen.getByTestId('Submit')

    await act(async () => {
      fireEvent.click(button)
    })

    const el = screen.getByText(/input is required/i)
    expect(el).toBeInTheDocument()
  })

  test('should form submit completed', async () => {
    const mockName = 'John Doe'
    const mockAge = '30'

    renderWithProviders(<Example2 />)

    const nameInput = screen.getByTestId<HTMLInputElement>('name')
    const ageInput = screen.getByTestId<HTMLInputElement>('age')
    const button = screen.getByTestId('Submit')

    await act(async () => {
      fireEvent.change(nameInput, { target: { value: mockName } })
      fireEvent.change(ageInput, { target: { value: mockAge } })
      fireEvent.click(button)
    })

    expect(nameInput.value).toBe(mockName)
    expect(ageInput.value).toBe(mockAge)
  })
})
