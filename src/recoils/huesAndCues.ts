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

export const huesAndCuesMeAtom = atom({
  key: 'huesAndCuesMeState',
  default: {
    allSelected: [],
    color: '',
    isHinter: false,
    isOwner: false,
    isTurn: false,
    player: {
      id: '',
      name: '',
    },
    score: 0,
    seq: 0,
    totalTurn: 0,
  } as RoomPlayer,
})

export const huesAndCuesModalChoiceAtom = atom({
  key: 'huesAndCuesModalChoiceState',
  default: {
    isOpen: false,
    colorId: '',
  } as { isOpen: boolean; colorId?: string },
})
