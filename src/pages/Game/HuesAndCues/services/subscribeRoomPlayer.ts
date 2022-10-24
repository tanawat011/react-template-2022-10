import type { Player, RoomPlayer } from '../type'
import type { DocumentData, QuerySnapshot } from 'firebase/firestore'

import { FIRESTORE_PATH } from 'constants/gameHuesAndCues'
import { getDocumentWithRef, subscribeCollection } from 'helpers/firebase'

export const subscribeRoomPlayer = (roomId: string, callback: (data: RoomPlayer[]) => void) => {
  const path = FIRESTORE_PATH.DOC_ROOM_PLAYER.replace(':roomId', roomId)

  const subscribeCallback = async (snapshot: QuerySnapshot<DocumentData>) => {
    const roomPlayers = await Promise.all(
      snapshot.docs.map(async (d) => {
        const snapshotPlayer = await getDocumentWithRef(d.get('refPlayer'))
        const player = snapshotPlayer.data() as Player
        const playerData = d.data()

        delete playerData.refPlayer

        return {
          ...(playerData as RoomPlayer),
          player,
        }
      }),
    )

    callback(roomPlayers)
  }

  return subscribeCollection(path, subscribeCallback, { orderBy: 'seq' })
}
