import { doc, getFirestore, setDoc } from 'firebase/firestore'

export const setDocument = async (collectionPath: string, payload: unknown) => {
  const db = getFirestore()
  const docRef = doc(db, collectionPath)

  await setDoc(docRef, payload)
}
