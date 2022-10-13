import { deleteDocument } from 'helpers/firebase'

jest.mock('firebase/firestore')

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('deleteDocument()', async () => {
    const voidResult = await deleteDocument('path/doc')

    expect(voidResult).toBe(void 0)
  })
})
