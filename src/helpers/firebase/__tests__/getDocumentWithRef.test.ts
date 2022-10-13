import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { mocked } from 'jest-mock'

import { getDocumentWithRef } from 'helpers/firebase'
import { getMockDocumentSnapshotDocs } from 'mocks/firestore'

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('getDocumentWithRef()', async () => {
    mocked(getDoc).mockResolvedValue(getMockDocumentSnapshotDocs({ id: 'x' }))
    const db = getFirestore()

    const snapshot = await getDocumentWithRef(doc(db, 'xxx'))

    expect(snapshot.data()).toEqual({ id: 'x' })
  })
})
