import { getDocs, getFirestore } from 'firebase/firestore'
import { mocked } from 'jest-mock'

import { deleteCollection } from 'helpers/firebase'

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
  getDocs: jest.fn(),
  writeBatch: () => ({ delete: () => jest.fn(), commit: () => jest.fn() }),
  collection: () => jest.fn(),
}))

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('deleteCollection() => snapshot size > 0', async () => {
    const db = getFirestore()

    mocked(getDocs).mockResolvedValue({
      size: 1,
      docs: [
        {
          ref: {
            id: 'x',
            converter: null,
            firestore: {
              type: 'firestore',
              app: { automaticDataCollectionEnabled: true, name: 'x', options: {} },
              toJSON: jest.fn(),
            },
            path: 'x',
            type: 'document',
            parent: {
              id: 'x',
              converter: null,
              firestore: {
                type: 'firestore',
                app: { automaticDataCollectionEnabled: true, name: 'x', options: {} },
                toJSON: jest.fn(),
              },
              path: 'x',
              parent: null,
              type: 'collection',
              withConverter: jest.fn(),
            },
            withConverter: jest.fn(),
          },
          data: jest.fn(),
          exists: jest.fn(),
          get: jest.fn(),
          id: 'x',
          metadata: { fromCache: false, hasPendingWrites: false, isEqual: jest.fn() },
        },
      ],
      docChanges: jest.fn(),
      empty: false,
      forEach: jest.fn(),
      metadata: { fromCache: false, hasPendingWrites: false, isEqual: jest.fn() },
      query: {
        converter: null,
        firestore: {
          type: 'firestore',
          app: { automaticDataCollectionEnabled: true, name: 'x', options: {} },
          toJSON: jest.fn(),
        },
        type: 'query',
        withConverter: jest.fn(),
      },
    })

    const voidResult = await deleteCollection(db, 'room-id-xxx')

    expect(voidResult).toBe(void 0)
  })

  test('deleteCollection() => snapshot size === 0', async () => {
    const db = getFirestore()

    mocked(getDocs).mockResolvedValue({
      size: 0,
      docs: [],
      docChanges: jest.fn(),
      empty: false,
      forEach: jest.fn(),
      metadata: { fromCache: false, hasPendingWrites: false, isEqual: jest.fn() },
      query: {
        converter: null,
        firestore: {
          type: 'firestore',
          app: { automaticDataCollectionEnabled: true, name: 'x', options: {} },
          toJSON: jest.fn(),
        },
        type: 'query',
        withConverter: jest.fn(),
      },
    })

    const voidResult = await deleteCollection(db, 'room-id-xxx')

    expect(voidResult).toBe(void 0)
  })
})
