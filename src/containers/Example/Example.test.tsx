import type { ButtonProps } from 'components/Button'

import { screen } from '@testing-library/react'

import { renderWithProviders } from 'helpers/testUtils'

import { Example } from './Example'

jest.mock('components/Button', () => ({
  Button: (props: ButtonProps) => <button {...props} data-testid={props.label || props.children} />,
}))

describe('<Example />', () => {
  test('should render', () => {
    renderWithProviders(<Example />)
    const el = screen.getByText(/learn react/i)
    expect(el).toBeInTheDocument()
  })

  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<Example />)
    expect(asFragment()).toMatchSnapshot()
  })
})
