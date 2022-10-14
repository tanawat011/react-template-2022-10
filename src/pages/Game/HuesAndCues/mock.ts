/* istanbul ignore file */
import type { Player, Room, RoomPlayer } from './type'

type OptionAllPlayers = {
  p1?: Partial<RoomPlayer>
  p2?: Partial<RoomPlayer>
  p3?: Partial<RoomPlayer>
}

export const getMockHintChoice = ['A1', 'A2', 'A3', 'A4']

export const getMockRoom = (option?: Partial<Room>): Room => {
  return {
    id: 'room-id-x',
    password: '',
    hintChoice: [],
    hintSelected: '',
    isStarted: false,
    isSubmitResult: false,
    totalRound: 0,
    ...option,
  }
}

export const getMockPlayers = (): Player[] => {
  return [
    {
      id: 'player-id-1',
      name: 'p1',
    },
    {
      id: 'player-id-2',
      name: 'p2',
    },
    {
      id: 'player-id-3',
      name: 'p3',
    },
  ]
}

const defaultPlayerData = {
  score: 0,
  allSelected: [],
  isHinter: false,
  isOwner: false,
  isTurn: false,
  totalTurn: 0,
}

export const getMockPlayersInRoom = (option?: OptionAllPlayers): RoomPlayer[] => {
  const players = getMockPlayers()

  return [
    {
      player: players[0],
      color: 'bg-[#000000]',
      seq: 1,
      ...defaultPlayerData,
      ...option?.p1,
    },
    {
      player: players[1],
      color: 'bg-[#999999]',
      seq: 2,
      ...defaultPlayerData,
      ...option?.p2,
    },
    {
      player: players[2],
      color: 'bg-[#666666]',
      seq: 3,
      ...defaultPlayerData,
      ...option?.p3,
    },
  ]
}
