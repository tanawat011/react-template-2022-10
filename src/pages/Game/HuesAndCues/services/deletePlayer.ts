import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { deleteDocument } from 'helpers/firebase'

export const deletePlayer = async (playerId: string) => {
  const path = FIRESTORE_PATH.DOC_PLAYER + `/${playerId}`

  await deleteDocument(path)
}
