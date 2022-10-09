import type { RoomPlayer } from './_type'

import { Button } from 'components/Button'

import { setPlayerInTheRoom } from './services'

type Prop = {
  roomId: string
  playersInRoom: RoomPlayer[]
  currentPlayer: RoomPlayer
  setCurrentPlayer: (player: RoomPlayer) => void
}

export const NextRound: React.FC<Prop> = ({
  roomId,
  playersInRoom,
  currentPlayer,
  setCurrentPlayer,
}) => {
  const handleNextRound = async () => {
    try {
      await Promise.all(
        playersInRoom.map(async (p) => {
          const countRound = p?.countRound || 0

          const _player: RoomPlayer = {
            ...p,
            countTurn: 0,
            countRound: countRound + 1,
          }

          if (currentPlayer.uid === p.uid) {
            setCurrentPlayer(_player)
          }

          await setPlayerInTheRoom(roomId, _player)
        }),
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  const isNotStartGame = !currentPlayer?.isStartGame
  const countRound = currentPlayer?.countRound || 0

  return (
    <Button disabled={isNotStartGame || countRound >= 1} onClick={handleNextRound}>
      Next Round
    </Button>
  )
}
