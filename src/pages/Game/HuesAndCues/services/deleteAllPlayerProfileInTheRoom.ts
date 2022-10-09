import type { RoomPlayer } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { deleteDocument } from 'helpers/firebase'

import { COLLECTION } from '../_constants'

export const deleteAllPlayerProfileInTheRoom = async (players: RoomPlayer[]) => {
  const db = getFirestore()

  await Promise.all(
    players.map(async ({ uid }) => {
      const collectionPath = `${COLLECTION.PLAYERS}/${uid}`

      await deleteDocument(db, collectionPath)
    }),
  )
}
