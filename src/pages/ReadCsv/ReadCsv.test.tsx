import { render } from '@testing-library/react'

import { ReadCsv } from './ReadCsv'

describe('<ReadCsv />', () => {
  test('match snapshot', () => {
    const { asFragment } = render(<ReadCsv />)
    expect(asFragment()).toMatchSnapshot()
  })
})
