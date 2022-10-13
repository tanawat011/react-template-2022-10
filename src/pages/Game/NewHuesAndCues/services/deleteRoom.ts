import { deleteCollection } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const deleteRoom = async (roomId: string) => {
  const path = FIRESTORE_PATH.DOC_ROOM + `/${roomId}`

  await deleteCollection(path)
}
