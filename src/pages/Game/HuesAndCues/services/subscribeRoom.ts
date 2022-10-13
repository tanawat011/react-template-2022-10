import type { Room } from '../type'
import type { DocumentData, DocumentSnapshot } from 'firebase/firestore'

import { subscribeDocument } from 'helpers/firebase'

import { FIRESTORE_PATH } from '../constants'

export const subscribeRoom = (roomId: string, callback: (data: Room) => void) => {
  const path = FIRESTORE_PATH.DOC_ROOM + `/${roomId}`

  const subscribeCallback = (snapshot: DocumentSnapshot<DocumentData>) => {
    const room = snapshot.data() as Room

    callback(room)
  }

  return subscribeDocument(path, subscribeCallback)
}
