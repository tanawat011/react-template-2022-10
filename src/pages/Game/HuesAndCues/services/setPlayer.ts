import type { Player } from '../type'

import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { setDocument } from 'helpers/firebase'

export const setPlayer = async (payload: Player) => {
  const path = FIRESTORE_PATH.DOC_PLAYER + `/${payload.id}`

  await setDocument(path, payload)
}
