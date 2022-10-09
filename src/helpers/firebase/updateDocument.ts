import type { Firestore } from 'firebase/firestore'

import { doc, updateDoc } from 'firebase/firestore'

export const updateDocument = async <T = unknown>(
  db: Firestore,
  collectionPath: string,
  payload: T,
) => {
  const docRef = doc(db, collectionPath)

  await updateDoc(docRef, payload as never)
}
