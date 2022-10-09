import type { RoomPlayer } from './_type'

import { Button } from 'components/Button'

import { setPlayerInTheRoom } from './services'

type Prop = {
  roomId: string
  playersInRoom: RoomPlayer[]
  currentPlayer: RoomPlayer
  updateCurrentHinter: (player: RoomPlayer) => Promise<void>
}

export const NextHinter: React.FC<Prop> = ({
  roomId,
  playersInRoom,
  currentPlayer,
  updateCurrentHinter,
}) => {
  const handlerInCase2PlayersInRoom = async () => {
    const currentHinter: RoomPlayer = {
      ...currentPlayer,
      choice: [],
      countRound: 0,
      countTurn: 0,
      hinter: false,
      isSubmitResult: false,
      result: '',
      isMyTurn: true,
    }

    await updateCurrentHinter(currentHinter)

    const nextHinter = playersInRoom.find((p) => !p.hinter)

    if (nextHinter) {
      const _nextHinter: RoomPlayer = {
        ...nextHinter,
        cells: [],
        countRound: 0,
        countTurn: 0,
        hinter: true,
        isMyTurn: false,
        isStartGame: true,
        isSubmitResult: false,
      }

      await setPlayerInTheRoom(roomId, _nextHinter)
    }
  }

  const handleUpdateCurrentHinter = async () => {
    const currentHinter: RoomPlayer = {
      ...currentPlayer,
      choice: [],
      countRound: 0,
      countTurn: 0,
      hinter: false,
      isSubmitResult: false,
      result: '',
    }

    await updateCurrentHinter(currentHinter)

    return currentHinter
  }

  const handleUpdateNextHinter = async (
    currentHinter: RoomPlayer,
    playersInRoomSort: RoomPlayer[],
  ) => {
    let nextNumber = currentHinter.number
    let nextHinter = playersInRoomSort[nextNumber]

    // ** In case the last player in the room
    if (!nextHinter) {
      nextNumber = 0
      nextHinter = playersInRoomSort[nextNumber]
    }

    // ** In case the next player is the hinter
    if (nextHinter && nextHinter.hinter) {
      nextNumber += 1
      nextHinter = playersInRoomSort[nextNumber] || playersInRoomSort[0]
    }

    const _nextHinter: RoomPlayer = {
      ...nextHinter,
      cells: [],
      choice: [],
      countRound: 0,
      countTurn: 0,
      hinter: true,
      isSubmitResult: false,
      result: '',
      isMyTurn: false,
      isStartGame: true,
    }

    await setPlayerInTheRoom(roomId, _nextHinter)

    return nextNumber + 1
  }

  const handleNextHinter = async () => {
    try {
      // * In case has 2 players in the room
      if (playersInRoom.length === 2) {
        await handlerInCase2PlayersInRoom()

        return
      }

      // * Update Current Hinter
      const currentHinter = await handleUpdateCurrentHinter()

      // * Update Next hinter
      const playersInRoomSort = playersInRoom.sort((a, b) => a.number - b.number)
      let nextNumber = await handleUpdateNextHinter(currentHinter, playersInRoomSort)

      // * Update Next Turn
      let nextPlayerTurn = playersInRoomSort[nextNumber]

      if (!nextPlayerTurn) {
        nextNumber = 0
        nextPlayerTurn = playersInRoomSort[nextNumber]
      }

      const _nextPlayerTurn: RoomPlayer = {
        ...nextPlayerTurn,
        cells: [],
        choice: [],
        countRound: 0,
        countTurn: 0,
        hinter: false,
        isSubmitResult: false,
        result: '',
        isMyTurn: true,
        isStartGame: true,
      }

      await setPlayerInTheRoom(roomId, _nextPlayerTurn)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  const isNotStartGame = !currentPlayer?.isStartGame
  const isNotSubmitResult = !currentPlayer?.isSubmitResult

  return (
    <Button disabled={isNotStartGame || isNotSubmitResult} onClick={handleNextHinter}>
      Next Hinter
    </Button>
  )
}
