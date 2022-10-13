import { setDocument } from 'helpers/firebase'

jest.mock('helpers/firebase', () => jest.requireActual('helpers/firebase'))

describe('helpers/firebase', () => {
  test('setDocument()', async () => {
    const voidResult = await setDocument('path/doc', { id: 'x' } as never)

    expect(voidResult).toBe(void 0)
  })
})
