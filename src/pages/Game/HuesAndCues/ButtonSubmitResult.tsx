import type { Room, RoomPlayer } from './type'

import { useState } from 'react'

import { Button } from 'components/Button'
import { IconCheck } from 'components/Icons'

import { setRoom, setRoomPlayer } from './services'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
  updateCurrRoomPlayer: (payload: RoomPlayer) => void
}

// * This button will clickable when the player is a `hinter`, So in this button will call the current player is a `hinter`
export const ButtonSubmitResult: React.FC<Prop> = ({
  room,
  roomPlayers,
  currRoomPlayer,
  updateCurrRoomPlayer,
}) => {
  const [isSubmitResult, setIsSubmitResult] = useState(room.isSubmitResult)

  const getResult2Point = () => {
    const hintResult = room.hintSelected
    const result2Point: string[] = []
    const [char, ...col] = hintResult.split('')

    const charAtStart = char.charCodeAt(0) - 1
    const charAtEnd = char.charCodeAt(0) + 1

    const prevCol = +col.join('') - 1
    const nextCol = +col.join('') + 1

    for (let i = charAtStart; i <= charAtEnd; i++) {
      for (let j = prevCol; j <= nextCol; j++) {
        const result = `${String.fromCharCode(i)}${j}`

        if (result === hintResult) {
          continue
        }

        result2Point.push(result)
      }
    }

    return result2Point
  }

  const getResult1Point = () => {
    const hintResult = room.hintSelected
    const result1Point: string[] = []
    const [char, ...col] = hintResult.split('')

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

    return result1Point
  }

  const handleClickSubmitResult = async () => {
    setIsSubmitResult(true)
    await setRoom({ ...room, isSubmitResult: true })

    const hinter = currRoomPlayer
    let hinterScore = hinter.score

    const result3Point = room.hintSelected
    const result2Point = getResult2Point()
    const result1Point = getResult1Point()

    await Promise.all(
      roomPlayers
        .filter((p) => !p.isHinter)
        .map(async (p) => {
          let score = p.score

          const colorIds = p.allSelected

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

          await setRoomPlayer(room.id, { ...p, score, isTurn: false, totalTurn: 0 })
        }),
    )

    const payload = { ...hinter, score: hinterScore, totalTurn: 0 }

    await setRoomPlayer(room.id, payload)
    updateCurrRoomPlayer(payload)
  }

  const isHinter = currRoomPlayer.isHinter
  const isStarted = room.isStarted
  const isAllPlayersCompleted = roomPlayers
    .filter((rp) => !rp.isHinter)
    .every((rp) => rp.totalTurn === 2)

  // * Disabled when you're not hinter or still not start game or submitted result or all players are not completed
  const isDisabled = [!isHinter, !isStarted, isSubmitResult, !isAllPlayersCompleted].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickSubmitResult}>
      <IconCheck />
    </Button>
  )
}
