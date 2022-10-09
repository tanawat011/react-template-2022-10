import type { Player } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { getDocument } from 'helpers/firebase'

import { COLLECTION } from '../_constants'

export const getPlayerProfile = async (id: string) => {
  const db = getFirestore()
  const collectionPath = COLLECTION.PLAYERS

  const data = await getDocument<Player>(db, collectionPath, id)

  return data
}
