import type { RoomPlayer } from '../type'

import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { setDocument } from 'helpers/firebase'

export const setRoomPlayer = async (roomId: string, payload: RoomPlayer) => {
  const path = FIRESTORE_PATH.DOC_ROOM_PLAYER.replace(':roomId', roomId) + `/${payload.player.id}`

  await setDocument(path, payload)
}
