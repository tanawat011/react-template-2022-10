import type { Firestore } from 'firebase/firestore'

import { doc, setDoc } from 'firebase/firestore'

export const setDocument = async <T = unknown>(
  db: Firestore,
  collectionPath: string,
  payload: T,
) => {
  const docRef = doc(db, collectionPath)

  await setDoc(docRef, payload as never)
}
