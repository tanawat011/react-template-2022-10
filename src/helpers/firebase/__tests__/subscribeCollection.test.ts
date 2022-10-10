import { getFirestore } from 'firebase/firestore'

import { subscribeCollection } from 'helpers/firebase'

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('__mocks__/firebase').default,
  onSnapshot: (_: unknown, callback: (snapshot: unknown) => void) => {
    callback({ docs: [{ data: () => 1 }] })

    return jest.fn()
  },
}))

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('subscribeCollection()', async () => {
    const db = getFirestore()
    const callback = (data: unknown) => {
      expect(data).toEqual([1])
    }

    const unsubscribe = subscribeCollection(db, 'path/doc', callback)

    expect(typeof unsubscribe).toBe('function')
  })
})
