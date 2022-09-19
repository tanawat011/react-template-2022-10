import { render } from '@testing-library/react'

import { ErrorContainer } from './Error'

describe('<ErrorContainer />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<ErrorContainer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
