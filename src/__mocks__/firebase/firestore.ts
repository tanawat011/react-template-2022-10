import type * as Firestore from 'firebase/firestore'

const firestore = jest.createMockFromModule<typeof Firestore>('firebase/firestore')

module.exports = firestore
