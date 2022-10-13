import type { RenderResult } from '@testing-library/react'

import { act, fireEvent, screen, waitFor } from '@testing-library/react'
import { mocked } from 'jest-mock'

import { renderWithProviders } from 'helpers/test'

import { SetDisplayName } from '../SetDisplayName'
import { MOCK } from '../_mock'
import { getAllPlayersInTheRoom } from '../services'

jest.mock('../services', () => ({
  setPlayerProfile: jest.fn(),
  setPlayerInTheRoom: jest.fn(),
  getAllPlayersInTheRoom: jest.fn(),
  toSetupRoom: jest.fn(),
  toRoom: jest.fn(),
}))

describe('<SetDisplayName />', () => {
  afterEach(() => {
    sessionStorage.removeItem('sessionId')
    sessionStorage.removeItem('tempSessionId')
  })

  test('match snapshot', () => {
    sessionStorage.setItem('sessionId', 'session-id-x')

    const { asFragment } = renderWithProviders(<SetDisplayName />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('submit display name', async () => {
    sessionStorage.setItem('sessionId', 'session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetDisplayName />)
    })

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'display name' } })

    const button = screen.getByTestId('button')
    fireEvent.submit(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('submit display name with `tempSessionId`', async () => {
    mocked(getAllPlayersInTheRoom).mockResolvedValue(MOCK.THREE_PLAYER)
    sessionStorage.setItem('tempSessionId', 'temp-session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetDisplayName />)
    })

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'display name' } })

    const button = screen.getByTestId('button')
    fireEvent.submit(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('submit display name with `tempSessionId`, but error', async () => {
    mocked(getAllPlayersInTheRoom).mockRejectedValue('error')
    sessionStorage.setItem('tempSessionId', 'temp-session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetDisplayName />)
    })

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'display name' } })

    const button = screen.getByTestId('button')
    fireEvent.submit(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('submit display name with `tempSessionId`, but no input display name', async () => {
    sessionStorage.setItem('tempSessionId', 'temp-session-id-x')
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetDisplayName />)
    })

    const button = screen.getByTestId('button')
    fireEvent.submit(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('submit display name without session data', async () => {
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetDisplayName />)
    })

    const button = screen.getByTestId('button')
    fireEvent.submit(button)

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })

  test('no session id', async () => {
    let el: RenderResult

    await act(async () => {
      el = renderWithProviders(<SetDisplayName />)
    })

    await waitFor(() => {
      expect(el.asFragment()).toBeTruthy()
    })
  })
})
