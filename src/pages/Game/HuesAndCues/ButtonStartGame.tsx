import type { RoomPlayer } from './type'

import { useRecoilState } from 'recoil'

import { IconCaretRight } from 'components/Icons'
import {
  huesAndCuesMeAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { Button } from './common'
import { setRoom, updateRoomPlayer } from './services'

// * This button will clickable when the player is a `owner`, So in this button will call the current player is a `owner`
export const ButtonStartGame = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [me, setMe] = useRecoilState(huesAndCuesMeAtom)
  const [players] = useRecoilState(huesAndCuesRoomPlayersAtom)

  const handleClickStartGame = async () => {
    setRoom({ ...room, isStarted: true })

    let nextPlayer = players.find((p) => p.seq === me.seq + 1)

    if (!nextPlayer) {
      nextPlayer = players.find((p) => p.seq === 1) as RoomPlayer
    }

    updateRoomPlayer(room.id, { ...nextPlayer, isTurn: true })
    updateRoomPlayer(room.id, { ...me, isTurn: false, totalTurn: me.totalTurn + 1 })
  }

  const isHinter = me.isHinter
  const isSelected = Boolean(room.hintSelected)
  const isStarted = room.isStarted

  // * Disabled when started game or you are not a `owner`
  const isDisabled = [!isHinter, isStarted, !isSelected].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickStartGame}>
      <IconCaretRight />
    </Button>
  )
}
