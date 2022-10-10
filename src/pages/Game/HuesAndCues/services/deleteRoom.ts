import { getFirestore } from 'firebase/firestore'

import { deleteCollection } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const deleteRoom = async (roomId: string) => {
  const db = getFirestore()
  const collectionPath = `${FIRESTORE_PATH.ROOMS_DOCUMENT}/${roomId}`

  await deleteCollection(db, collectionPath)
}
