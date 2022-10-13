import { getDoc } from 'firebase/firestore'
import { mocked } from 'jest-mock'

import { getDocument } from 'helpers/firebase'
import { getMockDocumentSnapshotDocs } from 'mocks/firestore'

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('getDocument()', async () => {
    mocked(getDoc).mockResolvedValue(getMockDocumentSnapshotDocs({ id: 'x' }))
    const snapshot = await getDocument('path/doc/id')

    expect(snapshot.data()).toEqual({ id: 'x' })
  })
})
