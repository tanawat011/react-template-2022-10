import { getFirestore } from 'firebase/firestore'

import { subscribeCollection } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const subscribeRoom = <T>(roomId: string, callback: (data: T[]) => void) => {
  const db = getFirestore()
  const collectionPath = `${FIRESTORE_PATH.ROOMS_DOCUMENT}/${roomId}`

  return subscribeCollection(db, collectionPath, callback)
}
