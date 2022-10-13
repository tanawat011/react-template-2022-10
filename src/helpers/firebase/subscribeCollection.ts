import type { QuerySnapshot, DocumentData } from 'firebase/firestore'

import { getFirestore, collection, onSnapshot } from 'firebase/firestore'

export const subscribeCollection = (
  path: string,
  callback: (snapshot: QuerySnapshot<DocumentData>) => void,
) => {
  const db = getFirestore()
  const collectionRef = collection(db, path)

  return onSnapshot(collectionRef, callback)
}
