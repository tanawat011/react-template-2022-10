import type { RoomPlayer } from '../_type'
import type { FirebaseOperator } from 'types/firebase'

import { getFirestore } from 'firebase/firestore'

import { getAllDocuments } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const getAllPlayersInTheRoom = async (roomId: string) => {
  const db = getFirestore()
  const collectionPath = `${FIRESTORE_PATH.ROOMS_DOCUMENT}`

  const option = {
    where: { field: 'number', operator: '>' as FirebaseOperator, value: 0 },
  }

  const playersInRoom = await getAllDocuments<RoomPlayer>(db, `${collectionPath}/${roomId}`, option)

  return playersInRoom
}
