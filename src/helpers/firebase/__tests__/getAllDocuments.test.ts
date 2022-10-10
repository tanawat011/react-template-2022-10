import { getFirestore } from 'firebase/firestore'

import { getAllDocuments } from 'helpers/firebase'

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('__mocks__/firebase').default,
  getDocs: () => ({ docs: [{ data: () => 1 }] }),
}))

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('getAllDocuments() => without option', async () => {
    const db = getFirestore()

    const result = await getAllDocuments(db, 'path/doc')

    expect(result).toEqual([1])
  })

  test('getAllDocuments() => with `limit`', async () => {
    const db = getFirestore()

    const result = await getAllDocuments(db, 'path/doc', { limit: 1 })

    expect(result).toEqual([1])
  })

  test('getAllDocuments() => with `orderBy`', async () => {
    const db = getFirestore()

    const result = await getAllDocuments(db, 'path/doc', { orderBy: 'name' })

    expect(result).toEqual([1])
  })

  test('getAllDocuments() => with `where`', async () => {
    const db = getFirestore()

    const result = await getAllDocuments(db, 'path/doc', {
      where: { field: 'name', operator: '==', value: 'x' },
    })

    expect(result).toEqual([1])
  })
})
