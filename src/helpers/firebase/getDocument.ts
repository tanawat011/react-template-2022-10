import { getDoc, doc, getFirestore } from 'firebase/firestore'

export const getDocument = async (path: string) => {
  const db = getFirestore()
  const docRef = doc(db, path)

  return getDoc(docRef)
}
