import { renderWithProviders } from 'helpers/test'

import { IconAngleDoubleRight } from './IconAngleDoubleRight'
import { IconAngleRight } from './IconAngleRight'
import { IconCaretRight } from './IconCaretRight'
import { IconCheck } from './IconCheck'
import { IconCircleDense } from './IconCircleDense'
import { IconEllipsis } from './IconEllipsis'

describe('<Icon />', () => {
  test('<IconAngleDoubleRight />, render snapshot', () => {
    const { asFragment } = renderWithProviders(<IconAngleDoubleRight />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('<IconAngleRight />, render snapshot', () => {
    const { asFragment } = renderWithProviders(<IconAngleRight />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('<IconCaretRight />, render snapshot', () => {
    const { asFragment } = renderWithProviders(<IconCaretRight />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('<IconCheck />, render snapshot', () => {
    const { asFragment } = renderWithProviders(<IconCheck />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('<IconCircleDense />, render snapshot', () => {
    const { asFragment } = renderWithProviders(<IconCircleDense />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('<IconEllipsis />, render snapshot', () => {
    const { asFragment } = renderWithProviders(<IconEllipsis />)

    expect(asFragment()).toMatchSnapshot()
  })
})
