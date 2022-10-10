import type { Player } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { setDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../_constants'

export const setPlayerProfile = async (payload: Player) => {
  const db = getFirestore()
  const collectionPath = `${FIRESTORE_PATH.PLAYERS_COLLECTION}/${payload.uid}`

  await setDocument(db, collectionPath, payload)
}
