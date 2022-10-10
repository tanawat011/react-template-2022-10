import type { RoomPlayer } from 'pages/Game/HuesAndCues/_type'

import { getAllPlayersInTheRoom } from 'pages/Game/HuesAndCues/services/getAllPlayersInTheRoom'

const mockPlayersInRoom = [
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

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
}))

jest.mock('helpers/firebase', () => ({
  getAllDocuments: (): RoomPlayer[] => mockPlayersInRoom,
}))

describe('HuesAndCues/services', () => {
  test('getAllPlayersInTheRoom()', async () => {
    const playersInRoom = await getAllPlayersInTheRoom('room-id-xxx')

    expect(playersInRoom).toMatchObject(mockPlayersInRoom)
  })
})
