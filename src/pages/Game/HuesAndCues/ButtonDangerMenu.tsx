import type { Room, RoomPlayer } from './type'

import { useState, useRef } from 'react'

import { Button } from 'components/Button'
import { IconEllipsis } from 'components/Icons'
import { useOutsideClicks } from 'hooks'

import { ButtonCloseGame } from './ButtonCloseGame'
import { ButtonLeaveGame } from './ButtonLeaveGame'
import { ButtonRestartGame } from './ButtonRestartGame'

type Prop = {
  room: Room
  roomPlayers: RoomPlayer[]
  currRoomPlayer: RoomPlayer
}

export const ButtonDangerMenu: React.FC<Prop> = ({ room, roomPlayers, currRoomPlayer }) => {
  const wrapperRef = useRef(null)
  const [isOpenDangerMenu, setIsOpenDangerMenu] = useState(false)

  useOutsideClicks(wrapperRef, () => {
    setIsOpenDangerMenu(false)
  })

  const handleClickOpenDangerMenu = () => {
    setIsOpenDangerMenu(!isOpenDangerMenu)
  }

  return (
    <div ref={wrapperRef}>
      <Button onClick={handleClickOpenDangerMenu}>
        <IconEllipsis />
      </Button>

      {isOpenDangerMenu && (
        <div>
          {!currRoomPlayer.isOwner && (
            <ButtonLeaveGame room={room} currRoomPlayer={currRoomPlayer} />
          )}

          {currRoomPlayer.isOwner && (
            <>
              <ButtonRestartGame
                room={room}
                roomPlayers={roomPlayers}
                currRoomPlayer={currRoomPlayer}
              />

              <ButtonLeaveGame room={room} currRoomPlayer={currRoomPlayer} />

              <ButtonCloseGame
                room={room}
                roomPlayers={roomPlayers}
                currRoomPlayer={currRoomPlayer}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}
