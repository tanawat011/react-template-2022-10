import type { RoomPlayer } from './type'

import { useRecoilState } from 'recoil'

import { Button } from 'components/Button'
import { useSessionStorage } from 'hooks'
import {
  huesAndCuesMeAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { deletePlayer, deleteRoomPlayer, updateRoomPlayer } from './services'

export const ButtonLeaveGame: React.FC = () => {
  const [, , deleteRoomId] = useSessionStorage('roomId')
  const [, , deleteMeId] = useSessionStorage('meId')

  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [players] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)

  const handleClickLeaveGame = async () => {
    if (me.isOwner) {
      let nextOwner = players.find((player) => player.seq === me.seq + 1)

      if (!nextOwner) {
        nextOwner = players.find((player) => player.seq === 1) as RoomPlayer
      }

      await updateRoomPlayer(room.id, {
        ...nextOwner,
        isOwner: true,
        isHinter: me.isHinter,
        isTurn: me.isTurn,
        seq: me.seq,
      })
    }

    await deleteRoomPlayer(room.id, me.player.id)
    await deletePlayer(me.player.id)

    deleteRoomId()
    deleteMeId()

    players
      .filter((p) => p.player.id !== me.player.id)
      .map((p, index) => {
        updateRoomPlayer(room.id, {
          ...p,
          seq: index + 1,
        })
      })
  }

  return <Button onClick={handleClickLeaveGame}>Leave Game</Button>
}
