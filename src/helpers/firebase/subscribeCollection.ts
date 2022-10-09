import type { Firestore } from 'firebase/firestore'

import { collection, onSnapshot } from 'firebase/firestore'

export const subscribeCollection = <T>(
  db: Firestore,
  collectionPath: string,
  callback: (data: T[]) => void,
) => {
  const collectionRef = collection(db, collectionPath)

  return onSnapshot(collectionRef, (snapshot) => {
    const data = snapshot.docs.map((_doc) => _doc.data()) as T[]

    callback(data)
  })
}
