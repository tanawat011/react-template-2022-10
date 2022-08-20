import type { ButtonProps } from 'components/Button'
import type { RenderResult } from '@testing-library/react'

import { waitFor, screen, fireEvent, act } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { Example2 } from './Example2'

jest.mock('components/Button', () => ({
  Button: (props: ButtonProps) => <button {...props} data-testid={props.label || props.children} />,
}))

jest.mock('helpers/api', () => ({
  fetchApi: () => Promise.resolve({ data: [{ id: 1, name: 'john' }] }),
}))

describe('<Example2 />', () => {
  test('should render', async () => {
    await act(async () => {
      renderWithProviders(<Example2 />)
    })

    const el = screen.getByText(/learn react/i)
    expect(el).toBeInTheDocument()
  })

  test('match snapshot', async () => {
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<Example2 />)
    })

    await waitFor(() => {
      expect(el.asFragment()).toMatchSnapshot()
    })
  })

  test('should render 3 button', async () => {
    await act(async () => {
      renderWithProviders(<Example2 />)
    })

    const totalButton = screen.getAllByRole('button').length
    expect(totalButton).toEqual(3)
  })

  test('should toggle to thai language', async () => {
    await act(async () => {
      renderWithProviders(<Example2 />)
    })

    const button = screen.getByTestId(/Toggle Lang TH/i)
    fireEvent.click(button)

    const el = screen.getByText(/แก้ไข/i)
    expect(el).toBeInTheDocument()
  })

  test('should toggle to english language', async () => {
    await act(async () => {
      renderWithProviders(<Example2 />)
    })

    const button = screen.getByTestId(/Toggle Lang EN/i)
    fireEvent.click(button)

    const el = screen.getByText(/Edit/i)
    expect(el).toBeInTheDocument()
  })

  test('should display error message when click submit form', async () => {
    await act(async () => {
      renderWithProviders(<Example2 />)
    })

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

    await act(async () => {
      renderWithProviders(<Example2 />)
    })

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
