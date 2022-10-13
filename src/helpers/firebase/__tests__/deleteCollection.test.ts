import { getDocs } from 'firebase/firestore'
import { mocked } from 'jest-mock'

import { deleteCollection } from 'helpers/firebase'
import { getMockQuerySnapshotDocs } from 'mocks/firestore'

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
  getDocs: jest.fn(),
  writeBatch: () => ({ delete: () => jest.fn(), commit: () => jest.fn() }),
  collection: () => jest.fn(),
}))

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('deleteCollection() => snapshot size > 0', async () => {
    mocked(getDocs).mockResolvedValue(getMockQuerySnapshotDocs({ id: 'x' }))

    const voidResult = await deleteCollection('room-id-xxx')

    expect(voidResult).toBe(void 0)
  })

  test('deleteCollection() => snapshot size === 0', async () => {
    mocked(getDocs).mockResolvedValue(getMockQuerySnapshotDocs())

    const voidResult = await deleteCollection('room-id-xxx')

    expect(voidResult).toBe(void 0)
  })
})
