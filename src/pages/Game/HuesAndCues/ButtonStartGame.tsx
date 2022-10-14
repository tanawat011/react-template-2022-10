import type { Room, RoomPlayer } from './type'

import { useState } from 'react'

import { Button } from 'components/Button'
import { IconAngleDoubleRight } from 'components/Icons'

import { setRoom } from './services'

type Prop = {
  room: Room
  currRoomPlayer: RoomPlayer
}

// * This button will clickable when the player is a `owner`, So in this button will call the current player is a `owner`
export const ButtonStartGame: React.FC<Prop> = ({ room, currRoomPlayer }) => {
  const [isStarted, setIsStarted] = useState(room.isStarted)

  const handleClickStartGame = async () => {
    setIsStarted(true)
    await setRoom({ ...room, isStarted: true })
  }

  const isOwner = currRoomPlayer.isOwner

  // * Disabled when started game or you are not a `owner`
  const isDisabled = [!isOwner, isStarted].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickStartGame}>
      <IconAngleDoubleRight />
    </Button>
  )
}
