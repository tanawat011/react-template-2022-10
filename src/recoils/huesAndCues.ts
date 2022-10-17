import type { Room, RoomPlayer } from 'pages/Game/HuesAndCues/type'

import { atom } from 'recoil'

export const huesAndCuesRoomAtom = atom({
  key: 'huesAndCuesRoomState',
  default: {
    hintChoice: [],
    hintSelected: '',
    id: '',
    isStarted: false,
    isSubmitResult: false,
    password: '',
    totalRound: 0,
  } as Room,
})

export const huesAndCuesRoomPlayersAtom = atom({
  key: 'huesAndCuesRoomPlayersState',
  default: [] as RoomPlayer[],
})
