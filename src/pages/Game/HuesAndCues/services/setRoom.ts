import type { Room } from '../type'

import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { setDocument } from 'helpers/firebase'

export const setRoom = async (payload: Room) => {
  const path = FIRESTORE_PATH.DOC_ROOM + `/${payload.id}`

  await setDocument(path, payload)
}
