/* istanbul ignore file */
import type { DocumentData, DocumentSnapshot, QuerySnapshot } from 'firebase/firestore'

export const getMockQuerySnapshotDocs = (data?: DocumentData): QuerySnapshot<DocumentData> => {
  return {
    size: data ? 1 : 0,
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
        data: data ? () => data : jest.fn(),
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
  }
}

export const getMockDocumentSnapshotDocs = (
  data?: DocumentData,
): DocumentSnapshot<DocumentData> => {
  return {
    data: data ? () => data : jest.fn(),
    exists: jest.fn(),
    get: jest.fn(),
    id: 'xxx',
    metadata: { fromCache: false, hasPendingWrites: false, isEqual: jest.fn() },
    ref: {
      id: 'x',
      converter: null,
      firestore: {
        type: 'firestore',
        app: { automaticDataCollectionEnabled: true, name: 'x', options: {} },
        toJSON: jest.fn(),
      },
      path: 'x',
      withConverter: jest.fn(),
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
    },
  }
}
