import type { Room, RoomPlayer } from './type'

import { Button } from 'components/Button'

import { setRoom, setRoomPlayer } from './services'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
}

// * This button will clickable when the player is a `owner`, So in this button will call the current player is a `owner`
export const ButtonRestartGame: React.FC<Prop> = ({ room, roomPlayers, currRoomPlayer }) => {
  const handleClickRestartGame = async () => {
    await setRoom({
      ...room,
      isStarted: false,
      hintChoice: [],
      hintSelected: '',
      isSubmitResult: false,
      totalRound: 0,
    })

    const owner = currRoomPlayer

    await setRoomPlayer(room.id, {
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
            await setRoomPlayer(room.id, {
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

  const isOwner = currRoomPlayer.isOwner

  // * Disabled when started game or you are not a `owner`
  const isDisabled = [!isOwner].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickRestartGame}>
      Restart Game
    </Button>
  )
}
