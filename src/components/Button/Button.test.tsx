import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('<Home />', () => {
  test('should render', () => {
    render(<Button label='test' />)
    const linkElement = screen.getByText(/test/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Button label='test' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
