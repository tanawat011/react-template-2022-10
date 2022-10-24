import type { RoomPlayer } from './type'

import { useState } from 'react'

import { useRecoilState } from 'recoil'

import { IconAngleDoubleRight } from 'components/Icons'
import {
  huesAndCuesMeAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { Button } from './common'
import { setRoom, setRoomPlayer } from './services'

// * This button will clickable when the player is a `hinter`, So in this button will call the current player is a `hinter`
export const ButtonNextHinter = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [roomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)
  const [isTurn, setIsTurn] = useState(me.isTurn)

  const getNextHinterBySequence = (seq: number) => {
    return roomPlayers.find((player) => player.seq === seq)
  }

  const handleClickNextHinter = async () => {
    setIsTurn(false)
    await setRoom({ ...room, totalRound: room.totalRound + 1, isSubmitResult: false })

    const hinter = me
    const hinterPayload = { ...hinter, isHinter: false, isTurn: false }

    await setRoomPlayer(room.id, hinterPayload)

    let seqNextHinter = hinter.seq + 1
    let nextHinter = getNextHinterBySequence(seqNextHinter)

    if (!nextHinter) {
      seqNextHinter = 1
      nextHinter = getNextHinterBySequence(seqNextHinter) as RoomPlayer
    }

    await setRoomPlayer(room.id, { ...nextHinter, isHinter: true, isTurn: true })
  }

  const isHinter = me.isHinter
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
