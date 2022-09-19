import { render } from '@testing-library/react'

import { ChangePassword } from './ChangePassword'

describe('<ChangePassword />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<ChangePassword />)
    expect(asFragment()).toMatchSnapshot()
  })
})
