import type { Room, RoomPlayer } from './type'

import { Button } from 'components/Button'

import { setRoom, updateRoomPlayer } from './services'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
}

export const ButtonRestartGame: React.FC<Prop> = ({ room, roomPlayers, currRoomPlayer }) => {
  const handleClickRestartGame = async () => {
    await setRoom({
      ...room,
      isStarted: false,
      hintChoice: [],
      hintSelected: '',
      isSubmitResult: false,
      totalRound: 0,
      hintWords: [],
    })

    const owner = currRoomPlayer

    await updateRoomPlayer(room.id, {
      ...owner,
      allSelected: [],
      isHinter: true,
      isTurn: true,
      score: 0,
      totalTurn: 0,
    })

    await Promise.all(
      roomPlayers
        .filter((p) => !p.isOwner)
        .map(
          async (player) =>
            await updateRoomPlayer(room.id, {
              ...player,
              allSelected: [],
              isHinter: false,
              isTurn: false,
              score: 0,
              totalTurn: 0,
            }),
        ),
    )
  }

  return <Button onClick={handleClickRestartGame}>Restart Game</Button>
}
