import type { RoomPlayer } from './_type'
import type { HuesAndCues } from 'data/HuesAndCues'

import { TwCol, TwRow } from 'components/Common'
import { getColTitles, getRowTitles, huesAndCues } from 'data/HuesAndCues'

import { CellClickable, CellTransparent, Marker } from './Common'
import { setPlayerInTheRoom } from './services'

const ColTitles = () => {
  const titles = ['', ...getColTitles(), '']

  return (
    <TwRow>
      {titles.map((title, index) => {
        return <CellTransparent key={`col-title-${title}-${index}`}>{title}</CellTransparent>
      })}
    </TwRow>
  )
}

const RowTitles = () => {
  const titles = getRowTitles()

  return (
    <TwCol>
      {titles.map((title, index) => {
        return <CellTransparent key={`row-title-${title}-${index}`}>{title}</CellTransparent>
      })}
    </TwCol>
  )
}

type Prop = {
  roomId: string
  currentPlayer: RoomPlayer
  playersInRoom: RoomPlayer[]
  updateCurrentPlayer: (currentPlayer: RoomPlayer) => Promise<void>
}

export const Board: React.FC<Prop> = ({
  roomId,
  currentPlayer,
  playersInRoom,
  updateCurrentPlayer,
}) => {
  const handlePlayerCells = async (item: HuesAndCues) => {
    const countTurn = currentPlayer?.countTurn || 0

    if (currentPlayer && !currentPlayer.hinter && currentPlayer.isMyTurn && countTurn < 1) {
      let cells = currentPlayer.cells
      const isDuplicateCell = cells.includes(item.id)

      if (isDuplicateCell) {
        cells = cells.filter((cell) => cell !== item.id)
      } else {
        cells.push(item.id)
      }

      // * In case has 2 players in the room
      if (playersInRoom.length === 2) {
        const _currentPlayer: RoomPlayer = {
          ...currentPlayer,
          cells,
          countTurn: countTurn + 1,
        }

        await updateCurrentPlayer(_currentPlayer)

        return
      }

      const playersInRoomSort = playersInRoom.sort((a, b) => a.number - b.number)

      let nextNumber = currentPlayer.number // 2
      let nextPlayerTurn = playersInRoomSort[nextNumber]

      // * In case the last player in the room
      if (!nextPlayerTurn) {
        nextNumber = 0
        nextPlayerTurn = playersInRoomSort[nextNumber]
      }

      // * In case the next player is the hinter
      if (nextPlayerTurn && nextPlayerTurn.hinter) {
        nextNumber += 1
        nextPlayerTurn = playersInRoomSort[nextNumber] || playersInRoomSort[0]
      }

      const _nextPlayerTurn: RoomPlayer = {
        ...nextPlayerTurn,
        isMyTurn: true,
      }

      await setPlayerInTheRoom(roomId, _nextPlayerTurn)

      const _currentPlayer: RoomPlayer = {
        ...currentPlayer,
        cells,
        isMyTurn: false,
        countTurn: countTurn + 1,
      }

      await updateCurrentPlayer(_currentPlayer)
    }
  }

  return (
    <>
      <ColTitles />
      <TwRow>
        <RowTitles />

        <TwCol>
          {huesAndCues.map((items, index) => {
            return (
              <TwRow key={`hues-and-cues-${index}`}>
                {items.map((cell) => {
                  const cellId = cell.id
                  const cellColor = cell.color

                  const player = playersInRoom.find((u) => u.cells.includes(cellId))

                  const hinter = playersInRoom.find((u) => u.hinter && !!u.result)
                  const isHint = hinter?.result === cellId

                  const isShowResultForHinter = currentPlayer.hinter
                  const isShowResultForPlayer = !currentPlayer.hinter && hinter?.isSubmitResult
                  const isShowResult = isHint && (isShowResultForHinter || isShowResultForPlayer)

                  return (
                    <CellClickable
                      key={`${cellColor}-${cellId}`}
                      className={cellColor}
                      onClick={() => handlePlayerCells(cell)}
                    >
                      {player?.color && <Marker className={player.color} />}
                      {isShowResult && (
                        <div className='absolute w-28 h-28 border-4 border-solid border-white' />
                      )}
                    </CellClickable>
                  )
                })}
              </TwRow>
            )
          })}
        </TwCol>

        <RowTitles />
      </TwRow>
      <ColTitles />
    </>
  )
}
