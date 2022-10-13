import type { RoomPlayer } from '../type'

import { deleteDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const deleteAllGlobalPlayers = async (players: RoomPlayer[]) => {
  const playerPath = FIRESTORE_PATH.DOC_PLAYER

  await Promise.all(
    players.map(async ({ player: { id } }) => {
      const path = playerPath + `/${id}`

      await deleteDocument(path)
    }),
  )
}
