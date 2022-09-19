import { render } from '@testing-library/react'

import { Error401 } from './401'

describe('<Error401 />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Error401 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
