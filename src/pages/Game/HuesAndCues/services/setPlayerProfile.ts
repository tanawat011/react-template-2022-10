import type { Player } from '../_type'

import { getFirestore } from 'firebase/firestore'

import { setDocument } from 'helpers/firebase'

import { COLLECTION } from '../_constants'

export const setPlayerProfile = async (payload: Player) => {
  const db = getFirestore()
  const collectionPath = `${COLLECTION.PLAYERS}/${payload.uid}`

  await setDocument(db, collectionPath, payload)
}
