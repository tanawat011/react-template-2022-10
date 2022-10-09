import type { RoomPlayer } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { setDocument } from 'helpers/firebase'

import { COLLECTION, DOCUMENT } from '../_constants'

export const setPlayerInTheRoom = async (roomId: string, payload: RoomPlayer) => {
  const db = getFirestore()
  const collectionPath = `${COLLECTION.HUES_AND_CUES}/${DOCUMENT.ROOMS}/${roomId}/${payload.uid}`

  await setDocument(db, collectionPath, payload)
}
