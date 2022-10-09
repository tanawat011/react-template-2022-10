import type { Firestore } from 'firebase/firestore'

import { doc, deleteDoc } from 'firebase/firestore'

export const deleteDocument = async (db: Firestore, collectionPath: string) => {
  const docRef = doc(db, collectionPath)

  await deleteDoc(docRef)
}
