import { getDocs } from 'firebase/firestore'
import { mocked } from 'jest-mock'

import { getAllDocuments } from 'helpers/firebase'
import { getMockQuerySnapshotDocs } from 'mocks/firestore'

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('getAllDocuments() => without option', async () => {
    mocked(getDocs).mockResolvedValue(getMockQuerySnapshotDocs({ id: 'x' }))
    const snapshot = await getAllDocuments('path/doc')
    const data = snapshot.docs.map((d) => d.data())

    expect(data).toEqual([{ id: 'x' }])
  })

  test('getAllDocuments() => with `limit`', async () => {
    mocked(getDocs).mockResolvedValue(getMockQuerySnapshotDocs({ id: 'x' }))
    const snapshot = await getAllDocuments('path/doc', { limit: 1 })
    const data = snapshot.docs.map((d) => d.data())

    expect(data).toEqual([{ id: 'x' }])
  })

  test('getAllDocuments() => with `orderBy`', async () => {
    mocked(getDocs).mockResolvedValue(getMockQuerySnapshotDocs({ id: 'x' }))
    const snapshot = await getAllDocuments('path/doc', { orderBy: 'name' })
    const data = snapshot.docs.map((d) => d.data())

    expect(data).toEqual([{ id: 'x' }])
  })

  test('getAllDocuments() => with `where`', async () => {
    mocked(getDocs).mockResolvedValue(getMockQuerySnapshotDocs({ id: 'x' }))
    const snapshot = await getAllDocuments('path/doc', {
      where: { field: 'name', operator: '==', value: 'x' },
    })
    const data = snapshot.docs.map((d) => d.data())

    expect(data).toEqual([{ id: 'x' }])
  })
})
