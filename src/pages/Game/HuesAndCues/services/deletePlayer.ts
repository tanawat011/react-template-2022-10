import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { deleteCollection } from 'helpers/firebase'

export const deletePlayer = async (playerId: string) => {
  const path = FIRESTORE_PATH.DOC_PLAYER + `/${playerId}`

  await deleteCollection(path)
}
