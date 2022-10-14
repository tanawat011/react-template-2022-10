import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { deleteCollection } from 'helpers/firebase'

export const deleteRoom = async (roomId: string) => {
  const path = FIRESTORE_PATH.DOC_ROOM + `/${roomId}`

  await deleteCollection(path)
}
