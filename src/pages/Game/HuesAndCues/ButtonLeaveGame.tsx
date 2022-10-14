import type { Room, RoomPlayer } from './type'

import { Button } from 'components/Button'

import { deletePlayer, deleteRoomPlayer } from './services'

type Prop = {
  room: Room
  currRoomPlayer: RoomPlayer
}

export const ButtonLeaveGame: React.FC<Prop> = ({ room, currRoomPlayer }) => {
  const handleClickLeaveGame = async () => {
    await deleteRoomPlayer(room.id, currRoomPlayer.player.id)
    await deletePlayer(currRoomPlayer.player.id)
  }

  return <Button onClick={handleClickLeaveGame}>Leave Game</Button>
}
