import { deleteRoom } from 'pages/Game/HuesAndCues/services/deleteRoom'

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(),
}))

jest.mock('helpers/firebase')

describe('HuesAndCues/services', () => {
  test('deleteRoom()', async () => {
    const voidResult = await deleteRoom('room-id-xxx')

    expect(voidResult).toBe(void 0)
  })
})
