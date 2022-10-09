import type { RoomPlayer } from '../_type'
import type { FirebaseOperator } from 'types/firebase'

import { getFirestore } from 'firebase/firestore'

import { getAllDocuments } from 'helpers/firebase'

import { COLLECTION, DOCUMENT } from '../_constants'

export const getAllPlayersInTheRoom = async (roomId: string) => {
  const db = getFirestore()
  const collectionPath = `${COLLECTION.HUES_AND_CUES}/${DOCUMENT.ROOMS}`

  const option = {
    where: { field: 'number', operator: '>' as FirebaseOperator, value: 0 },
  }

  const playersInRoom = await getAllDocuments<RoomPlayer>(db, `${collectionPath}/${roomId}`, option)

  return playersInRoom
}
