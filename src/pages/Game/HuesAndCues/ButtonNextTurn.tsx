import type { RoomPlayer } from './type'

import { useState } from 'react'

import { useRecoilState } from 'recoil'

import { IconAngleRight } from 'components/Icons'
import {
  huesAndCuesMeAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { Button } from './common'
import { setRoomPlayer } from './services'

// * This button will clickable when the player need to submit the result
export const ButtonNextTurn = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [roomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)
  const [isTurn, setIsTurn] = useState(me.isTurn)
  const [is2Turn, setIs2Turn] = useState(me.totalTurn === 2)

  const getNextPlayerTurnBySequence = (seq: number) => {
    return roomPlayers.find((player) => player.seq === seq)
  }

  const handleClickNextTurn = async () => {
    const totalTurn = me.totalTurn + 1
    const currentPlayerPayload = {
      ...me,
      isTurn: false,
      totalTurn,
    }

    setIsTurn(false)
    setIs2Turn(totalTurn === 2)
    await setRoomPlayer(room.id, currentPlayerPayload)

    let seqNextTurn = me.seq + 1
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
