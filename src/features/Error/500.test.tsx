import { render } from '@testing-library/react'

import { Error500 } from './500'

describe('<Error500 />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Error500 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
