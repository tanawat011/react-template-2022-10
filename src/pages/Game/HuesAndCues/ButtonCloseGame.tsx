import type { Room, RoomPlayer } from './type'

import { Button } from 'components/Button'

import { deleteAllGlobalPlayers, deleteRoom } from './services'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
}

// * This button will clickable when the player is a `owner`, So in this button will call the current player is a `owner`
export const ButtonCloseGame: React.FC<Prop> = ({ room, roomPlayers, currRoomPlayer }) => {
  const handleClickCloseGame = async () => {
    await deleteRoom(room.id)
    await deleteAllGlobalPlayers(roomPlayers)
  }

  const isOwner = currRoomPlayer.isOwner

  // * Disabled when started game or you are not a `owner`
  const isDisabled = [!isOwner].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickCloseGame}>
      Close Game
    </Button>
  )
}
