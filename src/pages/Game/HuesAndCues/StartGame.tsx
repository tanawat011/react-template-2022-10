import type { RoomPlayer } from './_type'

import { Button } from 'components/Button'

import { setPlayerInTheRoom } from './services'

type Prop = {
  roomId: string
  playersInRoom: RoomPlayer[]
  currentPlayer: RoomPlayer
  updateCurrentPlayer: (player: RoomPlayer) => Promise<void>
}

export const StartGame: React.FC<Prop> = ({
  roomId,
  playersInRoom,
  currentPlayer,
  updateCurrentPlayer,
}) => {
  const handleStartGame = async () => {
    try {
      const nextPlayerTurn = playersInRoom.find((p) => p.number === 2)

      if (nextPlayerTurn) {
        const payload: RoomPlayer = {
          ...nextPlayerTurn,
          isMyTurn: true,
        }

        await setPlayerInTheRoom(roomId, payload)
      }

      const payload: RoomPlayer = {
        ...currentPlayer,
        isStartGame: true,
      }

      await updateCurrentPlayer(payload)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  return <Button onClick={handleStartGame}>Start Game</Button>
}
