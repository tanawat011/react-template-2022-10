import { useState } from 'react'

import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { IconCircleDense } from 'components/Icons'
import { huesAndCues } from 'data/HuesAndCues'
import {
  huesAndCuesMeAtom,
  huesAndCuesModalChoiceAtom,
  huesAndCuesRoomAtom,
} from 'recoils/huesAndCues'

import { ButtonRandomHint } from './ButtonRandomHint'
import { Button } from './common'
import { setRoom } from './services'

const ButtonWrap = tw.div`grid grid-cols-2 grid-rows-2 grid-self-center gap-2 relative`
const ButtonChoice = tw(Button)`hover:border-2 hover:border-white`

export const ChooseHintChoice = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)
  const [modalChoice, setModalChoice] = useRecoilState(huesAndCuesModalChoiceAtom)

  const handleSelectHint = async (colorId: string) => {
    setModalChoice({ isOpen: true })
    // await setRoom({ ...room, hintSelected: colorId })
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
        const data = huesAndCues.flat().find((c) => c.id === colorId)
        const isHintSelected = room.hintSelected === colorId

        return (
          <ButtonChoice
            key={`choose-hint-choice-${data?.color}`}
            className={data?.color}
            disabled={isDisabled}
            onClick={() => handleSelectHint(colorId)}
          >
            {colorId}
            {isHintSelected && <IconCircleDense />}
          </ButtonChoice>
        )
      })}
    </ButtonWrap>
  )
}
