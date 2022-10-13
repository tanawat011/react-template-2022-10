import type { DocumentData, DocumentSnapshot } from 'firebase/firestore'

import { doc, getFirestore, onSnapshot } from 'firebase/firestore'

export const subscribeDocument = (
  path: string,
  callback: (snapshot: DocumentSnapshot<DocumentData>) => void,
) => {
  const db = getFirestore()
  const docRef = doc(db, path)

  return onSnapshot(docRef, callback)
}
