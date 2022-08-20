import { render, screen } from '@testing-library/react'

import { ButtonSecondary } from '../ButtonSecondary'

describe('<ButtonSecondary />', () => {
  test('should render', () => {
    render(<ButtonSecondary label='test' />)
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
  })
})
