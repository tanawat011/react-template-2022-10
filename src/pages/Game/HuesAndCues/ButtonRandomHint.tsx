import type { Room, RoomPlayer } from './type'

import { Button } from 'components/Button'

import { setRoom } from './services'

type Prop = {
  room: Room
  currRoomPlayer: RoomPlayer
}

export const ButtonRandomHint: React.FC<Prop> = ({ room, currRoomPlayer }) => {
  const randomNumber = (toNumber: number) => {
    return Math.floor(Math.random() * toNumber) + 1
  }

  const randomColorId = () => {
    const charNumber = randomNumber(16)
    const colNumber = randomNumber(30)
    const char = String.fromCharCode(charNumber + 64)

    return `${char}${colNumber}`
  }

  const handleClickRandomHint = async () => {
    let hintChoice: string[] = []

    for (let i = 1; i <= 4; i++) {
      hintChoice = [...hintChoice, randomColorId()]
    }

    await setRoom({ ...room, hintChoice })
  }

  const isHinter = currRoomPlayer.isHinter
  const isRandomHint = Boolean(room.hintChoice.length)

  const isDisabled = [!isHinter, isRandomHint].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickRandomHint}>
      {isHinter ? 'Random Hint' : 'You`re not a hinter'}
    </Button>
  )
}
