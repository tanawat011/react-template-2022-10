import type { Room } from '../type'

import { setDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const setRoom = async (payload: Room) => {
  const path = FIRESTORE_PATH.DOC_ROOM + `/${payload.id}`

  await setDocument(path, payload)
}
