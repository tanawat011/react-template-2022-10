import type { Firestore } from 'firebase/firestore'

import { getDocs, writeBatch, collection } from 'firebase/firestore'

export const deleteCollection = async (db: Firestore, collectionPath: string) => {
  const collectionRef = collection(db, collectionPath)

  const snapshot = await getDocs(collectionRef)

  if (snapshot.size > 0) {
    const batch = writeBatch(db)
    snapshot.docs.forEach((d) => {
      batch.delete(d.ref)
    })

    await batch.commit()
  }
}
