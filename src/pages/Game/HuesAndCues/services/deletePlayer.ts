import { deleteCollection } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const deletePlayer = async (playerId: string) => {
  const path = FIRESTORE_PATH.DOC_PLAYER + `/${playerId}`

  await deleteCollection(path)
}
