import type { Room, RoomPlayer } from './type'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { TwCol, TwRow } from 'components/Common'
import { getColTitles, getRowTitles, huesAndCues } from 'data/HuesAndCues'
import { useSessionStorage } from 'hooks'
import { huesAndCuesRoomAtom, huesAndCuesRoomPlayersAtom } from 'recoils/huesAndCues'

import { subscribeRoom } from './services/subscribeRoom'
import { subscribeRoomPlayer } from './services/subscribeRoomPlayer'

const ColTitles = (props: { className: string }) => {
  const titles = ['', ...getColTitles(), '']

  return (
    <div {...props}>
      {titles.map((title, index) => {
        return (
          <div key={`col-title-${title}-${index}`} className='h-6 w-6 text-center'>
            {title}
          </div>
        )
      })}
    </div>
  )
}

const RowTitles = (props: { className: string }) => {
  const titles = getRowTitles()

  return (
    <div {...props}>
      {titles.map((title, index) => {
        return (
          <div key={`row-title-${title}-${index}`} className='h-6 w-6 text-center'>
            {title}
          </div>
        )
      })}
    </div>
  )
}

export const HuesAndCues = () => {
  const [roomId] = useSessionStorage('roomId')

  const [room, setRoom] = useRecoilState(huesAndCuesRoomAtom)
  const [roomPlayers, setRoomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)

  let unsubscribeRoom = () => {
    return
  }

  let unsubscribeRoomPlayers = () => {
    return
  }

  useEffect(() => {
    fetchSubscribeRoom()

    return () => {
      unsubscribeRoom()
      unsubscribeRoomPlayers()
    }
  }, [])

  const fetchSubscribeRoom = () => {
    const callback = (_room: Room) => {
      setRoom(_room)

      fetchSubscribeRoomPlayers(_room.id)
    }

    unsubscribeRoom = subscribeRoom(roomId, callback)
  }

  const fetchSubscribeRoomPlayers = (_roomId: string) => {
    const callback = (_roomPlayers: RoomPlayer[]) => {
      setRoomPlayers(_roomPlayers)
    }

    unsubscribeRoomPlayers = subscribeRoomPlayer(_roomId, callback)
  }

  const TwCard = tw.div`bg-shark-gray rounded-lg p-4`

  return (
    <div className='grid grid-rows-2 grid-cols-2 gap-6 p-6'>
      <div className='col-span-2 grid grid-rows-1 grid-cols-2 gap-6'>
        <TwCard className='col-span-1'>Profile Controller</TwCard>
        <TwCard className='col-span-1'>Score Board</TwCard>
      </div>

      <TwCard className=''>
        <ColTitles className='' />

        <div className=''>
          <RowTitles className='' />

          <div className=''>
            {huesAndCues.map((items, index) => {
              return (
                <div key={`hues-and-cues-${index}`} className=''>
                  {items.map((item) => {
                    const itemId = item.id
                    const itemColor = item.color

                    return (
                      <div key={`${itemColor}-${itemId}`} className={itemColor + ' h-6 w-6'}></div>
                    )
                  })}
                </div>
              )
            })}
          </div>

          <RowTitles className='' />
        </div>

        <ColTitles className='' />
      </TwCard>
    </div>
  )
}
