import { useState, useRef } from 'react'

import { useRecoilState } from 'recoil'

import { IconBoxArrow, IconEllipsis } from 'components/Icons'
import { useOutsideClicks } from 'hooks'
import {
  huesAndCuesMeAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { ButtonCloseGame } from './ButtonCloseGame'
import { ButtonLeaveGame } from './ButtonLeaveGame'
import { ButtonRestartGame } from './ButtonRestartGame'

export const ButtonDangerMenu = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [roomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)

  const wrapperRef = useRef(null)
  const [isOpenDangerMenu, setIsOpenDangerMenu] = useState(false)

  useOutsideClicks(wrapperRef, () => {
    // setIsOpenDangerMenu(false)
  })

  const handleClickOpenDangerMenu = () => {
    setIsOpenDangerMenu(!isOpenDangerMenu)
  }

  return (
    <div ref={wrapperRef} className='relative'>
      <button
        className='w-7 h-7 rounded flex items-center justify-center bg-black hover:bg-slate-700'
        onClick={handleClickOpenDangerMenu}
      >
        <IconEllipsis />
      </button>

      {isOpenDangerMenu && (
        <>
          <IconBoxArrow width={20} height={16} className='absolute left-2 fill-slate-700' />
          <div className='absolute p-1 mt-2  left-0.5 rounded-lg bg-slate-700'>
            {!me.isOwner && <ButtonLeaveGame />}

            {me.isOwner && (
              <>
                <ButtonRestartGame room={room} roomPlayers={roomPlayers} currRoomPlayer={me} />

                <ButtonLeaveGame />

                <ButtonCloseGame />
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
