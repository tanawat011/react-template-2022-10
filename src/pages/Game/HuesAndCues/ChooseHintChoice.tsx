import type { Room, RoomPlayer } from './type'

import { Button } from 'components/Button'
import { IconCircleDense } from 'components/Icons'
import { huesAndCues } from 'data/HuesAndCues'

import { setRoom } from './services'

type Prop = {
  room: Room
  currRoomPlayer: RoomPlayer
}

export const ChooseHintChoice: React.FC<Prop> = ({ room, currRoomPlayer }) => {
  const handleSelectHint = async (colorId: string) => {
    await setRoom({ ...room, hintSelected: colorId })
  }

  const isHinter = currRoomPlayer.isHinter
  const isSelectedHint = Boolean(room.hintSelected)

  const isDisabled = [!isHinter, isSelectedHint].includes(true)

  return (
    <>
      {room.hintChoice.map((colorId) => {
        const data = huesAndCues.flat().find((c) => c.id === colorId)
        const isHintSelected = room.hintSelected === colorId

        return (
          <Button
            key={`choose-hint-choice-${data?.color}`}
            className={data?.color}
            disabled={isDisabled}
            onClick={() => handleSelectHint(colorId)}
          >
            {colorId}
            {isHintSelected && <IconCircleDense />}
          </Button>
        )
      })}
    </>
  )
}
