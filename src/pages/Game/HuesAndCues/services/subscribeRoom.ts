import type { RoomPlayer } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { subscribeCollection } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const subscribeRoom = (roomId: string, callback: (data: RoomPlayer[]) => void) => {
  const db = getFirestore()
  const collectionPath = `${FIRESTORE_PATH.ROOMS_DOCUMENT}/${roomId}`

  return subscribeCollection(db, collectionPath, callback)
}
