import type { Room, RoomPlayer } from 'pages/Game/HuesAndCues/type'

import { atom } from 'recoil'

const defaultRoom = {
  hintChoice: [],
  hintSelected: '',
  hintWords: [],
  id: '',
  isStarted: false,
  isSubmitResult: false,
  password: '',
  totalRound: 0,
}

const defaultPlayer = {
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
}

export const huesAndCuesRoomAtom = atom<Room>({
  key: 'huesAndCuesRoomAtom',
  default: defaultRoom,
})

export const huesAndCuesRoomPlayersAtom = atom<RoomPlayer[]>({
  key: 'huesAndCuesRoomPlayersAtom',
  default: [],
})

export const huesAndCuesRoomPlayerAtom = atom<RoomPlayer>({
  key: 'huesAndCuesRoomPlayerAtom',
  default: defaultPlayer,
})

export const huesAndCuesMeAtom = atom<RoomPlayer>({
  key: 'huesAndCuesMeAtom',
  default: defaultPlayer,
})

type ModalChoice = {
  isOpen: boolean
  colorId: string
  colorBg: string
  isFromClickNextTurn?: boolean
}

export const huesAndCuesModalChoiceAtom = atom<ModalChoice>({
  key: 'huesAndCuesModalChoiceAtom',
  default: {
    isOpen: false,
    colorId: '',
    colorBg: '',
    isFromClickNextTurn: false,
  },
})
