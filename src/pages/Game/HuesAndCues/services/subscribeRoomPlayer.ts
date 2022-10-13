import type { Player, RoomPlayer } from '../type'
import type { DocumentData, QuerySnapshot } from 'firebase/firestore'

import { getDocumentWithRef, subscribeCollection } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const subscribeRoomPlayer = (roomId: string, callback: (data: RoomPlayer[]) => void) => {
  const path = FIRESTORE_PATH.DOC_ROOM_PLAYER.replace(':roomId', roomId)

  const subscribeCallback = async (snapshot: QuerySnapshot<DocumentData>) => {
    const roomPlayers = await Promise.all(
      snapshot.docs.map(async (d) => {
        const snapshotPlayer = await getDocumentWithRef(d.get('player'))
        const player = snapshotPlayer.data() as Player

        return {
          ...(d.data() as RoomPlayer),
          player,
        }
      }),
    )

    callback(roomPlayers)
  }

  return subscribeCollection(path, subscribeCallback)
}
