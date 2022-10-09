import { getFirestore } from 'firebase/firestore'

import { deleteCollection } from 'helpers/firebase'

import { COLLECTION, DOCUMENT } from '../_constants'

export const deleteRoom = async (roomId: string) => {
  const db = getFirestore()
  const collectionPath = `${COLLECTION.HUES_AND_CUES}/${DOCUMENT.ROOMS}/${roomId}`

  await deleteCollection(db, collectionPath)
}
