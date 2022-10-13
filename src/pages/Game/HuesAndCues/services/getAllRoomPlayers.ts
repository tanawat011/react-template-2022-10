import type { Player } from '../type'

import { getAllDocuments, getDocumentWithRef } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const getAllRoomPlayers = async (roomId: string) => {
  const path = FIRESTORE_PATH.DOC_ROOM_PLAYER.replace(':roomId', roomId)

  const snapshotPlayers = await getAllDocuments(path)

  const players = await Promise.all(
    snapshotPlayers.docs.map(async (d) => {
      const snapshotPlayer = await getDocumentWithRef(d.get('player'))
      const player = snapshotPlayer.data() as Player

      return {
        ...d.data(),
        player,
      }
    }),
  )

  return players
}
