import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'
import { useSessionStorage } from 'hooks'

import { SESSION } from './_constants'
import {
  deleteAllPlayerProfileInTheRoom,
  deleteRoom,
  getAllPlayersInTheRoom,
  toSetDisplayRoom,
} from './services'

type Prop = {
  roomId: string
}

export const RemoveRoom: React.FC<Prop> = ({ roomId }) => {
  const navigate = useNavigate()

  const [, , removeUid] = useSessionStorage(SESSION.ID)
  const [, , removeRoomId] = useSessionStorage(SESSION.ROOM_ID)
  const [, , removeTempSessionId] = useSessionStorage(SESSION.TEMP_ID)

  const handleClearGame = async () => {
    try {
      const playersInRoom = await getAllPlayersInTheRoom(roomId)

      await deleteRoom(roomId)
      await deleteAllPlayerProfileInTheRoom(playersInRoom)

      removeUid()
      removeRoomId()
      removeTempSessionId()

      toSetDisplayRoom(navigate)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  return <Button onClick={handleClearGame}>Remove Room</Button>
}
