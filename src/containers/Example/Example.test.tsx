import { render, screen } from '@testing-library/react'

import { Example } from './Example'

describe('<Example />', () => {
  test('should render', () => {
    render(<Example />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = render(<Example />)
    expect(asFragment()).toMatchSnapshot()
  })
})
