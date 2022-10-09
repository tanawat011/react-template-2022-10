import type { Firestore } from 'firebase/firestore'

import { getDoc, doc, collection } from 'firebase/firestore'

export const getDocument = async <T = unknown>(
  db: Firestore,
  collectionPath: string,
  docId: string,
) => {
  const collectionRef = collection(db, collectionPath)
  const docRef = doc(collectionRef, docId)

  const snapshot = await getDoc(docRef)

  return snapshot.data() as T
}
