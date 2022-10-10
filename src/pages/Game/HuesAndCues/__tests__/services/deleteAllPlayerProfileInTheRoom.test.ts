import type { RoomPlayer } from '../../_type'

import { deleteAllPlayerProfileInTheRoom } from '../../services/deleteAllPlayerProfileInTheRoom'

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
}))

jest.mock('helpers/firebase')

describe('HuesAndCues/services', () => {
  test('deleteAllPlayerProfileInTheRoom()', async () => {
    const payload: RoomPlayer[] = [
      {
        uid: 'uid-xxx',
        cells: [],
        color: '',
        name: 'xxx',
        number: 1,
        owner: true,
        score: 0,
      },
    ]
    const voidResult = await deleteAllPlayerProfileInTheRoom(payload)

    expect(voidResult).toBe(void 0)
  })
})
