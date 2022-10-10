import type { RoomPlayer } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { setDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const setPlayerInTheRoom = async (roomId: string, payload: RoomPlayer) => {
  const db = getFirestore()
  const collectionPath = `${FIRESTORE_PATH.ROOMS_DOCUMENT}/${roomId}/${payload.uid}`

  await setDocument(db, collectionPath, payload)
}
