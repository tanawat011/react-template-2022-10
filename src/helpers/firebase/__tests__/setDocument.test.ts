import { getFirestore } from 'firebase/firestore'

import { setDocument } from 'helpers/firebase'

jest.mock('firebase/firestore')

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('setDocument()', async () => {
    const db = getFirestore()

    const voidResult = await setDocument(db, 'path/doc', { id: 'x' })

    expect(voidResult).toBe(void 0)
  })
})
