import type { RoomPlayer } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { getDocument } from 'helpers/firebase'

import { COLLECTION, DOCUMENT } from '../_constants'

export const getPlayerInTheRoom = async (roomId: string, sessionId: string) => {
  const db = getFirestore()
  const collectionPath = `${COLLECTION.HUES_AND_CUES}/${DOCUMENT.ROOMS}/${roomId}`

  const data = await getDocument<RoomPlayer>(db, collectionPath, sessionId)

  return data
}
