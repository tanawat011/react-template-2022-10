import type { RenderResult } from '@testing-library/react'

import { useEffect } from 'react'

import { act, waitFor } from '@testing-library/react'

import { renderWithProviders } from 'helpers/test'

import { useSessionStorage } from './useSessionStorage'

type Prop = {
  session: unknown
}

const MockComponent: React.FC<Prop> = ({ session }) => {
  const [, setId, removeId] = useSessionStorage('id')

  useEffect(() => {
    setId(session)

    return () => {
      removeId()
    }
  }, [])

  return <div>useSessionStorage</div>
}

describe('useSessionStorage', () => {
  test('set session to string type', async () => {
    const { asFragment } = renderWithProviders(<MockComponent session={'test-id-xxx'} />)
    expect(asFragment()).toBeTruthy()
  })

  test('set session to object type', async () => {
    const { asFragment } = renderWithProviders(<MockComponent session={{ id: 'test-id-xxx' }} />)
    expect(asFragment()).toBeTruthy()
  })
})
