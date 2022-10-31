import type { RoomPlayer } from './type'
import type { HuesAndCues } from 'data/HuesAndCues'

import { useRecoilState } from 'recoil'

import { IconAngleRight } from 'components/Icons'
import { huesAndCues } from 'data/HuesAndCues'
import {
  huesAndCuesMeAtom,
  huesAndCuesModalChoiceAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { Button } from './common'
import { updateRoomPlayer } from './services'

export const ButtonNextTurn = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)
  const [players] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [, setModalChoice] = useRecoilState(huesAndCuesModalChoiceAtom)

  const handleClickNextTurn = async () => {
    if (me.isHinter) {
      const data = huesAndCues.flat().find((c) => c.id === room.hintSelected) as HuesAndCues

      setModalChoice({
        isOpen: true,
        colorId: room.hintSelected,
        colorBg: data.color,
        isFromClickNextTurn: true,
      })

      return
    }

    let nextPlayer = players.find((p) => p.seq === me.seq + 1)

    if (!nextPlayer) {
      nextPlayer = players.find((p) => p.seq === 1) as RoomPlayer
    }

    updateRoomPlayer(room.id, { ...nextPlayer, isTurn: true })
    updateRoomPlayer(room.id, { ...me, isTurn: false, totalTurn: me.totalTurn + 1 })
  }

  let isDisabled = false

  if (me.isHinter) {
    if (me.totalTurn === 0 || !me.isTurn) isDisabled = true

    if (me.totalTurn === 2) isDisabled = true
  } else {
    if (!me.isTurn) isDisabled = true

    if (me.totalTurn === 0 && !me.allSelected.length) isDisabled = true

    if (me.totalTurn === 1 && me.allSelected.length < 2) isDisabled = true
  }

  return (
    <Button disabled={isDisabled} onClick={handleClickNextTurn}>
      <IconAngleRight />
    </Button>
  )
}
