import type { Player } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { getDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const getPlayerProfile = async (id: string) => {
  const db = getFirestore()
  const collectionPath = FIRESTORE_PATH.PLAYERS_COLLECTION

  const data = await getDocument<Player>(db, collectionPath, id)

  return data
}
