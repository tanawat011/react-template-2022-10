import type { RoomPlayer } from 'pages/Game/HuesAndCues/_type'

import { setPlayerInTheRoom } from 'pages/Game/HuesAndCues/services/setPlayerInTheRoom'

const mockPlayerInRoom: RoomPlayer = {
  uid: 'uid-xxx',
  cells: [],
  color: '',
  name: 'xxx',
  number: 1,
  owner: true,
  score: 0,
}

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
}))

jest.mock('helpers/firebase', () => ({
  setDocument: () => ({}),
}))

describe('HuesAndCues/services', () => {
  test('setPlayerInTheRoom()', async () => {
    const voidResult = await setPlayerInTheRoom('room-id-xxx', mockPlayerInRoom)

    expect(voidResult).toBe(void 0)
  })
})
