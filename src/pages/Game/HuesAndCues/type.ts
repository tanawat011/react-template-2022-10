/* istanbul ignore file */
import type { DocumentData, FieldValue, QueryDocumentSnapshot } from 'firebase/firestore'

export type Player = {
  id: string
  name: string
}

export type Room = {
  id: string
  password: string
  hintChoice: string[]
  hintSelected: string
  hintWords: string[]
  isStarted: boolean
  isSubmitResult: boolean
  totalRound: number
}

export type RawRoomPlayer = {
  refPlayer: QueryDocumentSnapshot<DocumentData>
  color: string
  score: number
  allSelected: string[]
  isOwner: boolean
  isTurn: boolean
  isHinter: boolean
  totalTurn: number
  seq: number
}

export type RoomPlayer = Omit<RawRoomPlayer, 'refPlayer'> & {
  player: Player
}
