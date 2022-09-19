import { render } from '@testing-library/react'

import { Home } from './Home'

describe('<Home />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
})
