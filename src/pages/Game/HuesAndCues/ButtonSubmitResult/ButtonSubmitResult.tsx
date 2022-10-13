import type { Room, RoomPlayer } from '../type'

import { useState } from 'react'

import { Button } from 'components/Button'
import { IconCheck } from 'components/Icons'

import { setRoom } from '../services'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
}

export const ButtonSubmitResult: React.FC<Prop> = ({ room, roomPlayers, currRoomPlayer }) => {
  const [isSubmitResult, setIsSubmitResult] = useState(room.isSubmitResult)

  const handleClickSubmitResult = async () => {
    setIsSubmitResult(true)
    await setRoom({ ...room, isSubmitResult: true })
  }

  const isHinter = currRoomPlayer.isHinter
  const isStarted = room.isStarted
  const isAllPlayersCompleted = roomPlayers
    .filter((rp) => !rp.isHinter)
    .every((rp) => rp.totalTurn === 2)

  // * Disabled when you're not hinter or still not start game or submitted result or all players are not completed
  const isDisabled = [!isHinter, !isStarted, isSubmitResult, !isAllPlayersCompleted].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickSubmitResult}>
      <IconCheck />
    </Button>
  )
}
