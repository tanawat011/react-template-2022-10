import { render } from '@testing-library/react'

import { Error502 } from './502'

describe('<Error502 />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Error502 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
