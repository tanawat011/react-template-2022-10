import { render } from '@testing-library/react'

import { Error403 } from './403'

describe('<Error403 />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Error403 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
