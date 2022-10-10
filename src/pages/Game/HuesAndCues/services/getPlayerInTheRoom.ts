import type { RoomPlayer } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { getDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const getPlayerInTheRoom = async (roomId: string, sessionId: string) => {
  const db = getFirestore()
  const collectionPath = `${FIRESTORE_PATH.ROOMS_DOCUMENT}/${roomId}`

  const data = await getDocument<RoomPlayer>(db, collectionPath, sessionId)

  return data
}
