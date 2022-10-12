import type { RenderResult } from '@testing-library/react'

import { fireEvent, screen, act, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { RemoveRoom } from '../RemoveRoom'
import { getAllPlayersInTheRoom } from '../services'

jest.mock('components/Button', () => ({
  Button: (props: React.HTMLAttributes<never>) => {
    return (
      <div {...props} data-testid={'button'}>
        {props.children}
      </div>
    )
  },
}))

jest.mock('../services', () => ({
  deleteAllPlayerProfileInTheRoom: jest.fn(),
  deleteRoom: jest.fn(),
  getAllPlayersInTheRoom: jest.fn(),
  toSetDisplayRoom: jest.fn(),
}))

describe('<RemoveRoom />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<RemoveRoom roomId={'room-id-xxx'} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('clicks remove room', async () => {
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<RemoveRoom roomId={'room-id-xxx'} />)
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('clicks remove room, but error', async () => {
    mocked(getAllPlayersInTheRoom).mockRejectedValue('error')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<RemoveRoom roomId={'room-id-xxx'} />)
    })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
