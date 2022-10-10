import { getFirestore } from 'firebase/firestore'

import { getDocument } from 'helpers/firebase'

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('__mocks__/firebase').default,
  getDoc: () => ({ data: () => 1 }),
}))

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('getDocument()', async () => {
    const db = getFirestore()

    const result = await getDocument(db, 'path/doc', 'id')

    expect(result).toBe(1)
  })
})
