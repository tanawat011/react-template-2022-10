import type { RoomPlayer } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { deleteDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const deleteAllPlayerProfileInTheRoom = async (players: RoomPlayer[]) => {
  const db = getFirestore()

  await Promise.all(
    players.map(async ({ uid }) => {
      const collectionPath = `${FIRESTORE_PATH.PLAYERS_COLLECTION}/${uid}`

      await deleteDocument(db, collectionPath)
    }),
  )
}
