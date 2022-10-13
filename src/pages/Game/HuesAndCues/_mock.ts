import type { RoomPlayer } from './_type'

const PLAYER_BASE: RoomPlayer = {
  cells: [],
  uid: '1',
  name: 'Player 1',
  score: 0,
  color: '',
  number: 1,
}

const HINTER: RoomPlayer = {
  uid: 'p1',
  name: 'p1',
  number: 1,
  color: 'bg-[#0758a5]',
  score: 0,
  hinter: true,
  cells: [],
}

const HINTER_HAS_CHOICE: RoomPlayer = {
  ...HINTER,
  choice: ['A1', 'A2', 'A3', 'A4'],
}

const HINTER_HAS_CHOICE_SELECT_RESULT: RoomPlayer = {
  ...HINTER_HAS_CHOICE,
  result: 'A1',
}

const HINTER_HAS_CHOICE_SELECT_RESULT_SUBMIT_RESULT: RoomPlayer = {
  ...HINTER_HAS_CHOICE_SELECT_RESULT,
  isSubmitResult: true,
}

const HINTER_IS_OWNER: RoomPlayer = {
  ...HINTER,
  owner: true,
}

const HINTER_IS_OWNER_HAS_CHOICE: RoomPlayer = {
  ...HINTER_HAS_CHOICE,
  owner: true,
}

const HINTER_IS_OWNER_HAS_CHOICE_SELECT_RESULT: RoomPlayer = {
  ...HINTER_HAS_CHOICE_SELECT_RESULT,
  owner: true,
}

const HINTER_IS_OWNER_HAS_CHOICE_SELECT_RESULT_SUBMIT_RESULT: RoomPlayer = {
  ...HINTER_HAS_CHOICE_SELECT_RESULT_SUBMIT_RESULT,
  owner: true,
}

const PLAYER: RoomPlayer = {
  uid: 'P2',
  name: 'p2',
  number: 2,
  color: 'bg-[#117822]',
  score: 0,
  cells: [],
}

const PLAYER_MY_TURN: RoomPlayer = {
  ...PLAYER,
  isMyTurn: true,
}

const PLAYER_MY_TURN_SELECT_CELL: RoomPlayer = {
  ...PLAYER_MY_TURN,
  cells: ['A1'],
}

const result = 'F4'
const choice = ['F4', 'A9', 'P27', 'E15']

export const MOCK: {
  ONE_PLAYER: RoomPlayer[]
  TWO_PLAYER: RoomPlayer[]
  TWO_PLAYER_LAST_IS_HINTER: RoomPlayer[]
  THREE_PLAYER: RoomPlayer[]
  THREE_PLAYER_SECOND_IS_HINTER: RoomPlayer[]
  THREE_PLAYER_LAST_IS_HINTER: RoomPlayer[]
  THREE_PLAYER_LAST_IS_TURN: RoomPlayer[]
  HINTER_NO_CHOICE: RoomPlayer[]
  HINTER_NO_SELECT_CHOICE: RoomPlayer[]
  HINTER_SELECTED_CHOICE: RoomPlayer[]
  PLAYER_NO_COLOR: RoomPlayer[]
  PLAYER_HAS_COLOR: RoomPlayer[]
  PLAYER_HAS_COLOR_START_GAME: RoomPlayer[]
  PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT: RoomPlayer[]
} = {
  ONE_PLAYER: [
    {
      ...PLAYER_BASE,
      cells: ['D17'],
      number: 1,
      hinter: true,
      isMyTurn: true,
      color: 'bg-[#0758a5]',
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
      result,
      choice,
      owner: true,
      score: 1,
    },
    {
      ...PLAYER_BASE,
      uid: '2',
      number: 2,
      isMyTurn: true,
    },
    {
      ...PLAYER_BASE,
      uid: '3',
      number: 3,
    },
  ],
  THREE_PLAYER_LAST_IS_TURN: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      result,
      choice,
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
  THREE_PLAYER_SECOND_IS_HINTER: [
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
    {
      ...PLAYER_BASE,
      number: 3,
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
  HINTER_NO_CHOICE: [
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
    {
      ...PLAYER_BASE,
      number: 3,
    },
  ],
  HINTER_NO_SELECT_CHOICE: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      choice,
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
  HINTER_SELECTED_CHOICE: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      choice,
      result,
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
  PLAYER_NO_COLOR: [
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
    {
      ...PLAYER_BASE,
      number: 3,
    },
  ],
  PLAYER_HAS_COLOR: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      color: 'bg-[#0758a5]',
      owner: true,
    },
    {
      ...PLAYER_BASE,
      number: 2,
      isMyTurn: true,
      color: 'bg-[#117822]',
    },
    {
      ...PLAYER_BASE,
      number: 3,
    },
  ],
  PLAYER_HAS_COLOR_START_GAME: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      color: 'bg-[#0758a5]',
      owner: true,
      isStartGame: true,
      result: 'F4',
    },
    {
      ...PLAYER_BASE,
      number: 2,
      isMyTurn: true,
      cells: ['F4'],
    },
    {
      ...PLAYER_BASE,
      number: 3,
      cells: ['F5', 'F6'],
    },
  ],
  PLAYER_HAS_COLOR_START_GAME_SUBMIT_RESULT: [
    {
      ...PLAYER_BASE,
      number: 1,
      hinter: true,
      color: 'bg-[#0758a5]',
      owner: true,
      isStartGame: true,
      isSubmitResult: true,
      countRound: 1,
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
}
