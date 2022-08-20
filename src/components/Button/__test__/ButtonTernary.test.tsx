import { render, screen } from '@testing-library/react'

import { ButtonTernary } from '../ButtonTernary'

describe('<ButtonTernary />', () => {
  test('should render', () => {
    render(<ButtonTernary label='test' />)
    const button = screen.getByText(/test/i)
    expect(button).toBeInTheDocument()
  })
})
