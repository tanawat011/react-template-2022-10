import type { Player, RoomPlayer } from '../type'

import { getDocument, getDocumentWithRef } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const getRoomPlayer = async (roomId: string, playerId: string) => {
  const path = FIRESTORE_PATH.DOC_ROOM_PLAYER.replace(':roomId', roomId) + `/${playerId}`

  const snapshotPlayerInRoom = await getDocument(path)
  const snapshotPlayer = await getDocumentWithRef(snapshotPlayerInRoom.get('player'))

  const playerInRoom = snapshotPlayerInRoom.data() as RoomPlayer
  const player = snapshotPlayer.data() as Player

  playerInRoom.player = player

  return playerInRoom
}
