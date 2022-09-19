import { render } from '@testing-library/react'

import { Error503 } from './503'

describe('<Error503 />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Error503 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
