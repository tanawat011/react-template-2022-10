import { getFirestore, getDocs, writeBatch, collection } from 'firebase/firestore'

export const deleteCollection = async (collectionPath: string) => {
  const db = getFirestore()
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
