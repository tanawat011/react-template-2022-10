import { useRecoilState } from 'recoil'

import { Button } from 'components/Button'
import { useSessionStorage } from 'hooks'
import { huesAndCuesRoomAtom, huesAndCuesRoomPlayersAtom } from 'recoils/huesAndCues'

import { deleteAllGlobalPlayers, deleteRoom } from './services'

export const ButtonCloseGame: React.FC = () => {
  const [, , deleteRoomId] = useSessionStorage('roomId')
  const [, , deleteMeId] = useSessionStorage('meId')

  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [players] = useRecoilState(huesAndCuesRoomPlayersAtom)

  const handleClickCloseGame = async () => {
    await deleteRoom(room.id)
    await deleteAllGlobalPlayers(players)

    deleteRoomId()
    deleteMeId()
  }

  return <Button onClick={handleClickCloseGame}>Close Game</Button>
}
