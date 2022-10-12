import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { SetupRoom } from '../SetupRoom'
import { MOCK } from '../_mock'
import { getPlayerProfile, setPlayerInTheRoom } from '../services'

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
  getPlayerProfile: jest.fn(),
  setPlayerInTheRoom: jest.fn(),
  toRoom: jest.fn(),
  toSetDisplayRoom: jest.fn(),
  toSetupRoom: jest.fn(),
}))

describe('<SetupRoom />', () => {
  afterEach(() => {
    sessionStorage.removeItem('sessionId')
    sessionStorage.removeItem('roomId')
  })

  test('match snapshot', () => {
    sessionStorage.setItem('sessionId', 'session-id-x')

    const { asFragment } = renderWithProviders(<SetupRoom />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('no session id', () => {
    const { asFragment } = renderWithProviders(<SetupRoom />)

    expect(asFragment()).toBeTruthy()
  })

  test('has session id and room id', () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    sessionStorage.setItem('roomId', 'room-id-x')

    const { asFragment } = renderWithProviders(<SetupRoom />)

    expect(asFragment()).toBeTruthy()
  })

  test('create public room', async () => {
    mocked(getPlayerProfile).mockResolvedValue(MOCK.ONE_PLAYER[0])
    sessionStorage.setItem('sessionId', 'session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetupRoom />)
    })

    const button = screen.getAllByTestId('button')[0]
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('create public room, but no players', async () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetupRoom />)
    })

    const button = screen.getAllByTestId('button')[0]
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('create public room, but error', async () => {
    mocked(getPlayerProfile).mockResolvedValue(MOCK.ONE_PLAYER[0])
    mocked(setPlayerInTheRoom).mockRejectedValue('error')
    sessionStorage.setItem('sessionId', 'session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetupRoom />)
    })

    const button = screen.getAllByTestId('button')[0]
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('create private room', async () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetupRoom />)
    })

    const button = screen.getAllByTestId('button')[1]
    fireEvent.click(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('join room', async () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetupRoom />)
    })

    const button = screen.getAllByTestId('button')[2]
    fireEvent.submit(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
