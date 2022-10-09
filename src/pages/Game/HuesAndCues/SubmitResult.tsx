import type { RoomPlayer } from './_type'

import { Button } from 'components/Button'

import { setPlayerInTheRoom } from './services'

type Prop = {
  roomId: string
  playersInRoom: RoomPlayer[]
  currentPlayer: RoomPlayer
  updateCurrentPlayer: (player: RoomPlayer) => void
}

export const SubmitResult: React.FC<Prop> = ({
  roomId,
  playersInRoom,
  currentPlayer,
  updateCurrentPlayer,
}) => {
  const getCellsFor2Point = (hinter: RoomPlayer) => {
    const result2Point: string[] = []

    if (hinter?.result) {
      const [char, ...col] = hinter.result.split('')

      const charAtStart = char.charCodeAt(0) - 1
      const charAtEnd = char.charCodeAt(0) + 1

      const prevCol = +col.join('') - 1
      const nextCol = +col.join('') + 1

      for (let i = charAtStart; i <= charAtEnd; i++) {
        for (let j = prevCol; j <= nextCol; j++) {
          const result = `${String.fromCharCode(i)}${j}`

          if (result === hinter.result) {
            continue
          }

          result2Point.push(result)
        }
      }
    }

    return result2Point
  }

  const getCellsFor1Point = (hinter: RoomPlayer) => {
    const result1Point: string[] = []

    if (hinter?.result) {
      const [char, ...col] = hinter.result.split('')

      const charAtStart = char.charCodeAt(0) - 2
      const charAtEnd = char.charCodeAt(0) + 2

      const prevCol = +col.join('') - 2
      const nextCol = +col.join('') + 2

      for (let i = prevCol; i <= nextCol; i++) {
        result1Point.push(`${String.fromCharCode(charAtStart)}${i}`)
      }

      for (let i = charAtStart + 1; i <= charAtEnd - 1; i++) {
        result1Point.push(`${String.fromCharCode(i)}${prevCol}`)
        result1Point.push(`${String.fromCharCode(i)}${nextCol}`)
      }

      for (let i = prevCol; i <= nextCol; i++) {
        result1Point.push(`${String.fromCharCode(charAtEnd)}${i}`)
      }
    }

    return result1Point
  }

  const handleSubmitResult = async () => {
    try {
      const hinter = playersInRoom.find((p) => p.hinter)
      let hinterScore = 0

      if (hinter) {
        hinterScore = hinter.score

        const result3Point = hinter?.result || ''
        const result2Point = getCellsFor2Point(hinter)
        const result1Point = getCellsFor1Point(hinter)

        playersInRoom
          .filter((p) => !p.hinter)
          .forEach(async (p) => {
            let score = p.score

            const colorIds = p.cells
            const countRound = p?.countRound || 0

            if (colorIds.includes(result3Point)) {
              hinterScore += 1
              score += 3
            }

            colorIds.forEach((colorId) => {
              if (result2Point.includes(colorId)) {
                hinterScore += 1
                score += 2
              }

              if (result1Point.includes(colorId)) {
                score += 1
              }
            })

            const payload: RoomPlayer = {
              ...p,
              score,
              countRound: countRound + 1,
            }

            await setPlayerInTheRoom(roomId, payload)
          })
      }

      const isHinterIsCurrentPlayer = hinter?.uid === currentPlayer.uid
      const countRoundCurrentPlayer = currentPlayer?.countRound || 0

      const _currentPlayer: RoomPlayer = {
        ...currentPlayer,
        isSubmitResult: true,
        score: hinterScore,
        ...(isHinterIsCurrentPlayer && { countRound: countRoundCurrentPlayer + 1 }),
      }

      updateCurrentPlayer(_currentPlayer)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  const isNotStartGame = !currentPlayer?.isStartGame
  const isSubmitResult = currentPlayer?.isSubmitResult

  return (
    <Button disabled={isNotStartGame || isSubmitResult} onClick={handleSubmitResult}>
      Submit Result
    </Button>
  )
}
