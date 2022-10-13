import { doc, getFirestore, setDoc } from 'firebase/firestore'

export const setDocument = async (collectionPath: string, payload: never) => {
  const db = getFirestore()
  const docRef = doc(db, collectionPath)

  await setDoc(docRef, payload)
}
