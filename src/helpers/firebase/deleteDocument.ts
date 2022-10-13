import { getFirestore, doc, deleteDoc } from 'firebase/firestore'

export const deleteDocument = async (collectionPath: string) => {
  const db = getFirestore()
  const docRef = doc(db, collectionPath)

  await deleteDoc(docRef)
}
