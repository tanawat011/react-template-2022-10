import type { Room, RoomPlayer } from './type'

import { useState } from 'react'

import { Button } from 'components/Button'
import { IconAngleRight } from 'components/Icons'

import { setRoomPlayer } from './services'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
  updateCurrRoomPlayer: (payload: RoomPlayer) => void
}

// * This button will clickable when the player need to submit the result
export const ButtonNextTurn: React.FC<Prop> = ({
  room,
  roomPlayers,
  currRoomPlayer,
  updateCurrRoomPlayer,
}) => {
  const [isTurn, setIsTurn] = useState(currRoomPlayer.isTurn)
  const [is2Turn, setIs2Turn] = useState(currRoomPlayer.totalTurn === 2)

  const getNextPlayerTurnBySequence = (seq: number) => {
    return roomPlayers.find((player) => player.seq === seq)
  }

  const handleClickNextTurn = async () => {
    const totalTurn = currRoomPlayer.totalTurn + 1
    const currentPlayerPayload = {
      ...currRoomPlayer,
      isTurn: false,
      totalTurn,
    }

    setIsTurn(false)
    setIs2Turn(totalTurn === 2)
    updateCurrRoomPlayer(currentPlayerPayload)
    await setRoomPlayer(room.id, currentPlayerPayload)

    let seqNextTurn = currRoomPlayer.seq + 1
    let nextPlayerTurn = getNextPlayerTurnBySequence(seqNextTurn)

    // * If the next player turn is not found, then the next player turn is the first player
    if (!nextPlayerTurn) {
      seqNextTurn = 1
      nextPlayerTurn = getNextPlayerTurnBySequence(seqNextTurn) as RoomPlayer
    }

    await setRoomPlayer(room.id, { ...nextPlayerTurn, isTurn: true })
  }

  const isSubmitResult = room.isSubmitResult
  const isStarted = room.isStarted

  // * Disabled when still not start game or room submitted result or not the turn of the player or the player already submit 2 times
  const isDisabled = [!isStarted, isSubmitResult, !isTurn, is2Turn].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickNextTurn}>
      <IconAngleRight />
    </Button>
  )
}
