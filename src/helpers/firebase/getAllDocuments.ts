import type { QueryOption } from 'types/firebase'

import { getFirestore, limit, orderBy, query, where, collection, getDocs } from 'firebase/firestore'

export const getAllDocuments = async (collectionPath: string, option?: QueryOption) => {
  const db = getFirestore()
  const collectionRef = collection(db, collectionPath)

  let queryRef

  if (option) {
    queryRef = query(collectionRef)

    if (option?.where) {
      const { field, operator, value } = option.where

      queryRef = query(queryRef, where(field, operator, value))
    }

    if (option?.orderBy) {
      queryRef = query(queryRef, orderBy(option.orderBy))
    }

    if (option?.limit) {
      queryRef = query(queryRef, limit(option.limit))
    }
  } else {
    queryRef = collectionRef
  }

  const snapshot = await getDocs(queryRef)

  return snapshot
}
