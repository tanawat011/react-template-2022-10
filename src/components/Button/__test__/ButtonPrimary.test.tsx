import { render, screen } from '@testing-library/react'

import { ButtonPrimary } from '../ButtonPrimary'

describe('<ButtonPrimary />', () => {
  test('should render', () => {
    render(<ButtonPrimary label='test' />)
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
  })
})
