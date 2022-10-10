import { getFirestore } from 'firebase/firestore'

import { updateDocument } from 'helpers/firebase'

jest.mock('firebase/firestore')

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('updateDocument()', async () => {
    const db = getFirestore()

    const voidResult = await updateDocument(db, 'path/doc', { id: 'x' })

    expect(voidResult).toBe(void 0)
  })
})
