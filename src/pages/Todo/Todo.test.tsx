import { render } from '@testing-library/react'

import { Todo } from './Todo'

describe('<Todo />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<Todo />)
    expect(asFragment()).toMatchSnapshot()
  })
})
