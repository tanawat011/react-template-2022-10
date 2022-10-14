import type { Room, RoomPlayer } from './type'

import { useState } from 'react'

import { Button } from 'components/Button'
import { IconAngleDoubleRight } from 'components/Icons'

import { setRoom, setRoomPlayer } from './services'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
  updateCurrRoomPlayer: (payload: RoomPlayer) => void
}

// * This button will clickable when the player is a `hinter`, So in this button will call the current player is a `hinter`
export const ButtonNextHinter: React.FC<Prop> = ({
  room,
  roomPlayers,
  currRoomPlayer,
  updateCurrRoomPlayer,
}) => {
  const [isTurn, setIsTurn] = useState(currRoomPlayer.isTurn)

  const getNextHinterBySequence = (seq: number) => {
    return roomPlayers.find((player) => player.seq === seq)
  }

  const handleClickNextHinter = async () => {
    setIsTurn(false)
    await setRoom({ ...room, totalRound: room.totalRound + 1, isSubmitResult: false })

    const hinter = currRoomPlayer
    const hinterPayload = { ...hinter, isHinter: false, isTurn: false }

    updateCurrRoomPlayer(hinterPayload)
    await setRoomPlayer(room.id, hinterPayload)

    let seqNextHinter = hinter.seq + 1
    let nextHinter = getNextHinterBySequence(seqNextHinter)

    if (!nextHinter) {
      seqNextHinter = 1
      nextHinter = getNextHinterBySequence(seqNextHinter) as RoomPlayer
    }

    await setRoomPlayer(room.id, { ...nextHinter, isHinter: true, isTurn: true })
  }

  const isHinter = currRoomPlayer.isHinter
  const isSubmitResult = room.isSubmitResult
  const isStarted = room.isStarted

  /** Disabled when
   * * you're not hinter
   * * turn of the hinter
   * * still not start game
   * * room still not submit result
   */

  const isDisabled = [!isTurn, !isHinter, !isStarted, !isSubmitResult].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickNextHinter}>
      <IconAngleDoubleRight />
    </Button>
  )
}
