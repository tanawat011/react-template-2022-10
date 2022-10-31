import type { HuesAndCues } from 'data/HuesAndCues'

import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { huesAndCues } from 'data/HuesAndCues'
import {
  huesAndCuesMeAtom,
  huesAndCuesModalChoiceAtom,
  huesAndCuesRoomAtom,
} from 'recoils/huesAndCues'

import { ButtonRandomHint } from './ButtonRandomHint'
import { Button } from './common'

const ButtonWrap = tw.div`grid grid-cols-2 grid-rows-2 grid-self-center gap-2 relative`
const ButtonChoice = tw(Button)`hover:border-2 hover:border-white disabled:border-0`

export const ChooseHintChoice = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)
  const [, setModalChoice] = useRecoilState(huesAndCuesModalChoiceAtom)

  const handleSelectHint = async (colorId: string, colorBg: string) => {
    setModalChoice({ isOpen: true, colorId, colorBg })
  }

  const isHinter = me.isHinter
  const isHinterButNoRandomHint = isHinter && !room.hintChoice.length
  const isSelectedHint = Boolean(room.hintSelected)

  const isDisabled = [!isHinter, isSelectedHint].includes(true)

  if (!isHinter || isHinterButNoRandomHint) {
    return (
      <ButtonWrap>
        <Button disabled />
        <Button disabled />
        <Button disabled />
        <Button disabled />

        <ButtonRandomHint className='absolute -top-1 -left-1' />
      </ButtonWrap>
    )
  }

  return (
    <ButtonWrap>
      {room.hintChoice.map((colorId) => {
        const data = huesAndCues.flat().find((c) => c.id === colorId) as HuesAndCues
        const isHintSelected = room.hintSelected === colorId
        const color = data.color

        if (room.hintSelected && !isHintSelected) {
          return (
            <Button key={`choose-hint-choice-${color}`} disabled>
              {colorId}
            </Button>
          )
        }

        return (
          <ButtonChoice
            key={`choose-hint-choice-${color}`}
            className={color}
            disabled={isDisabled}
            onClick={() => handleSelectHint(colorId, color)}
          >
            {colorId}
          </ButtonChoice>
        )
      })}
    </ButtonWrap>
  )
}
