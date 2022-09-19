import { render } from '@testing-library/react'

import { Error404 } from './404'

describe('<Error404 />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Error404 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
