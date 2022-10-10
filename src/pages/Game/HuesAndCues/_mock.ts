import type { RoomPlayer } from './_type'

const PLAYER_BASE: RoomPlayer = {
  cells: [],
  uid: '1',
  name: 'Player 1',
  score: 0,
  color: 'red',
  number: 1,
}

export const MOCK: {
  ONE_PLAYER: RoomPlayer[]
  TWO_PLAYER: RoomPlayer[]
  TWO_PLAYER_LAST_IS_HINTER: RoomPlayer[]
  THREE_PLAYER: RoomPlayer[]
  THREE_PLAYER_LAST_IS_HINTER: RoomPlayer[]
  THREE_PLAYER_LAST_IS_TURN: RoomPlayer[]
} = {
  ONE_PLAYER: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      isMyTurn: true,
    },
  ],
  TWO_PLAYER: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
    },
    {
      ...PLAYER_BASE,
      number: 2,
      isMyTurn: true,
    },
  ],
  TWO_PLAYER_LAST_IS_HINTER: [
    {
      ...PLAYER_BASE,
      number: 1,
      isMyTurn: true,
    },
    {
      ...PLAYER_BASE,
      number: 2,
      hinter: true,
    },
  ],
  THREE_PLAYER: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      result: 'F4',
    },
    {
      ...PLAYER_BASE,
      number: 2,
      isMyTurn: true,
    },
    {
      ...PLAYER_BASE,
      number: 3,
    },
  ],
  THREE_PLAYER_LAST_IS_TURN: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
    },
    {
      ...PLAYER_BASE,
      number: 2,
    },
    {
      ...PLAYER_BASE,
      number: 3,
      isMyTurn: true,
    },
  ],
  THREE_PLAYER_LAST_IS_HINTER: [
    {
      ...PLAYER_BASE,
      number: 1,
    },
    {
      ...PLAYER_BASE,
      number: 2,
      isMyTurn: true,
    },
    {
      ...PLAYER_BASE,
      number: 3,
      hinter: true,
    },
  ],
}
