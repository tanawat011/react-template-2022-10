import type { Firestore } from 'firebase/firestore'
import type { FirebaseOperator } from 'types/firebase'

import { limit, orderBy, query, where, collection, getDocs } from 'firebase/firestore'

type Option = {
  limit?: number
  orderBy?: string
  where?: {
    field: string
    operator: FirebaseOperator
    value: string | number | boolean
  }
}

export const getAllDocuments = async <T = unknown>(
  db: Firestore,
  collectionPath: string,
  option?: Option,
) => {
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

  return snapshot.docs.map((d) => d.data()) as T[]
}
