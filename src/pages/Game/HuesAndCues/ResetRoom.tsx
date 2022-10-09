import type { RoomPlayer } from './_type'

import { Button } from 'components/Button'

import { getAllPlayersInTheRoom, setPlayerInTheRoom } from './services'

type Prop = {
  roomId: string
  currentPlayer: RoomPlayer
  setCurrentPlayer: (player: RoomPlayer) => void
}

export const ResetRoom: React.FC<Prop> = ({ roomId, currentPlayer, setCurrentPlayer }) => {
  const handleClearGame = async () => {
    try {
      const playersInRoom = await getAllPlayersInTheRoom(roomId)

      playersInRoom.forEach(async (player) => {
        const _player: RoomPlayer = {
          ...player,
          cells: [],
          color: '',
          score: 0,
          result: '',
          choice: [],
          hinter: !!player.owner,
          isSubmitResult: false,
          isStartGame: false,
          countTurn: 0,
          countRound: 0,
        }

        if (currentPlayer.uid === player.uid) {
          setCurrentPlayer(_player)
        }

        await setPlayerInTheRoom(roomId, _player)
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  return <Button onClick={handleClearGame}>Reset Room</Button>
}
