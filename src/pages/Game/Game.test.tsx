import { render } from '@testing-library/react'

import { Game } from './Game'

describe('<Game />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Game />)
    expect(asFragment()).toMatchSnapshot()
  })
})
