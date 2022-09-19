import { render } from '@testing-library/react'

import { Error504 } from './504'

describe('<Error504 />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Error504 />)
    expect(asFragment()).toMatchSnapshot()
  })
})
