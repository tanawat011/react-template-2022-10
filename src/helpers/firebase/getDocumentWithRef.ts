import type { DocumentData, DocumentReference } from 'firebase/firestore'

import { getDoc } from 'firebase/firestore'

export const getDocumentWithRef = async (docRef: DocumentReference<DocumentData>) => {
  return await getDoc(docRef)
}
