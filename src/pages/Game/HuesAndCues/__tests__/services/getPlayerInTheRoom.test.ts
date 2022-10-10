import type { RoomPlayer } from 'pages/Game/HuesAndCues/_type'

import { getPlayerInTheRoom } from 'pages/Game/HuesAndCues/services/getPlayerInTheRoom'

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
  getDocument: () => mockPlayerInRoom,
}))

describe('HuesAndCues/services', () => {
  test('getPlayerInTheRoom()', async () => {
    const playersInRoom = await getPlayerInTheRoom('room-id-xxx', 'uid-xxx')

    expect(playersInRoom).toMatchObject(mockPlayerInRoom)
  })
})
