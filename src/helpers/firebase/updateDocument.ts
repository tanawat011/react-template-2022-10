import { doc, getFirestore, updateDoc } from 'firebase/firestore'

export const updateDocument = async (collectionPath: string, payload: unknown) => {
  const db = getFirestore()
  const docRef = doc(db, collectionPath)

  await updateDoc(docRef, payload as never)
}
