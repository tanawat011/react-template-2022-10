import { getFirestore } from 'firebase/firestore'

import { subscribeCollection } from 'helpers/firebase'

import { COLLECTION, DOCUMENT } from '../_constants'

export const subscribeRoom = <T>(roomId: string, callback: (data: T[]) => void) => {
  const db = getFirestore()
  const collectionPath = `${COLLECTION.HUES_AND_CUES}/${DOCUMENT.ROOMS}/${roomId}`

  return subscribeCollection(db, collectionPath, callback)
}
