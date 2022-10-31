import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { deleteDocument } from 'helpers/firebase'

export const deleteRoomPlayer = async (roomId: string, playerId: string) => {
  const path = FIRESTORE_PATH.DOC_ROOM_PLAYER.replace(':roomId', roomId) + `/${playerId}`

  await deleteDocument(path)
}
