import type { QuerySnapshot, DocumentData } from 'firebase/firestore'
import type { QueryOption } from 'types/firebase'

import {
  query,
  where,
  orderBy,
  limit,
  getFirestore,
  collection,
  onSnapshot,
} from 'firebase/firestore'

export const subscribeCollection = (
  path: string,
  callback: (snapshot: QuerySnapshot<DocumentData>) => void,
  option?: QueryOption,
) => {
  const db = getFirestore()
  const collectionRef = collection(db, path)

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

  return onSnapshot(queryRef, callback)
}
