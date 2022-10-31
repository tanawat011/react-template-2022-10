import type { RoomPlayer } from './type'

import { useRecoilState } from 'recoil'

import { IconAngleDoubleRight } from 'components/Icons'
import {
  huesAndCuesMeAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { Button } from './common'
import { setRoom, updateRoomPlayer } from './services'

export const ButtonNextHinter = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [players] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [me, setMe] = useRecoilState(huesAndCuesMeAtom)

  const handleClickNextHinter = async () => {
    await setRoom({
      ...room,
      hintChoice: [],
      hintSelected: '',
      hintWords: [],
      isStarted: false,
      isSubmitResult: false,
      totalRound: room.totalRound + 1,
    })
    await updateRoomPlayer(room.id, {
      ...me,
      isHinter: false,
      isTurn: false,
    })

    let nextHinter = players.find((player) => player.seq === me.seq + 1)

    if (!nextHinter) {
      nextHinter = players.find((player) => player.seq === 1) as RoomPlayer
    }

    await updateRoomPlayer(room.id, {
      ...nextHinter,
      isHinter: true,
      isTurn: true,
      allSelected: [],
      totalTurn: 0,
    })

    await Promise.all(
      players
        .filter((p) => ![me.player.id, nextHinter?.player.id].includes(p.player.id))
        .map(async (p) => {
          await updateRoomPlayer(room.id, {
            ...p,
            allSelected: [],
            totalTurn: 0,
          })
        }),
    )
  }

  const isDisabled = [me.isHinter && !room.isSubmitResult, !me.isHinter].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickNextHinter}>
      <IconAngleDoubleRight />
    </Button>
  )
}
