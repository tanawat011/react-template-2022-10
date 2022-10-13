import { onSnapshot } from 'firebase/firestore'
import { mocked } from 'jest-mock'

import { subscribeCollection } from 'helpers/firebase'

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('subscribeCollection()', async () => {
    mocked(onSnapshot).mockReturnValue(jest.fn())

    const unsubscribe = subscribeCollection('path/doc', jest.fn())

    expect(typeof unsubscribe).toBe('function')
  })
})
