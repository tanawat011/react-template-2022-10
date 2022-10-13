import { doc, getFirestore, updateDoc } from 'firebase/firestore'

export const updateDocument = async (collectionPath: string, payload: never) => {
  const db = getFirestore()
  const docRef = doc(db, collectionPath)

  await updateDoc(docRef, payload)
}
