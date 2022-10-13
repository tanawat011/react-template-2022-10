import type { Player } from '../type'

import { setDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const setPlayer = async (payload: Player) => {
  const path = FIRESTORE_PATH.DOC_PLAYER + `/${payload.id}`

  await setDocument(path, payload)
}
