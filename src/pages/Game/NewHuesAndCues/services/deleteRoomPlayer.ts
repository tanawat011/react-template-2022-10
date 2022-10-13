import { deleteCollection } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const deleteRoomPlayer = async (roomId: string, playerId: string) => {
  const path = FIRESTORE_PATH.DOC_ROOM_PLAYER.replace(':roomId', roomId) + `/${playerId}`

  await deleteCollection(path)
}
