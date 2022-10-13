import { updateDocument } from 'helpers/firebase'

jest.mock('firebase/firestore')

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('updateDocument()', async () => {
    const voidResult = await updateDocument('path/doc', { id: 'x' } as never)

    expect(voidResult).toBe(void 0)
  })
})
