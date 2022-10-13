import { onSnapshot } from 'firebase/firestore'
import { mocked } from 'jest-mock'

import { subscribeDocument } from 'helpers/firebase'

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('subscribeDocument()', async () => {
    mocked(onSnapshot).mockReturnValue(jest.fn())

    const unsubscribe = subscribeDocument('path/doc', jest.fn())

    expect(typeof unsubscribe).toBe('function')
  })
})
