import type { Room, RoomPlayer } from './type'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { TwCard } from 'components/Common'
import { useSessionStorage } from 'hooks'
import {
  huesAndCuesMeAtom,
  huesAndCuesModalChoiceAtom,
  huesAndCuesRoomAtom,
  huesAndCuesRoomPlayersAtom,
} from 'recoils/huesAndCues'

import { BoardGame } from './BoardGame'
import { ProfileController } from './ProfileController'
// import { ScoreBoard } from './ScoreBoard'
import { ScoreBoardWithAllProfile } from './ScoreBoardWithAllProfile'
import { subscribeRoom } from './services/subscribeRoom'
import { subscribeRoomPlayer } from './services/subscribeRoomPlayer'

const Container = tw.div`grid grid-rows-4 grid-cols-2 gap-6 p-6`
const WrapInfo = tw.div`col-span-2 row-span-1 grid grid-rows-1 grid-cols-4 gap-6`
const ModalChoice = tw(TwCard)`absolute-center z-50 bg-slate-700`

export const HuesAndCues = () => {
  const [roomId] = useSessionStorage('roomId')
  const [meId] = useSessionStorage('meId')

  const [, setRoom] = useRecoilState(huesAndCuesRoomAtom)
  const [, setRoomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [, setMe] = useRecoilState(huesAndCuesMeAtom)
  const [modalChoice, setModalChoice] = useRecoilState(huesAndCuesModalChoiceAtom)

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

      const me = _roomPlayers.find((rp) => rp.player.id === meId)

      if (me) {
        setMe(me)
      }
    }

    unsubscribeRoomPlayers = subscribeRoomPlayer(_roomId, callback)
  }

  return (
    <>
      <Container>
        <WrapInfo>
          <ProfileController />
          {/* <ScoreBoard /> */}
          <ScoreBoardWithAllProfile />
        </WrapInfo>

        <BoardGame />
      </Container>

      {modalChoice.isOpen && (
        <div
          className='absolute-center bg-black bg-opacity-80 z-40 w-full h-full'
          onClick={() => setModalChoice({ isOpen: false })}
        >
          <ModalChoice className='' onClick={(e) => e.stopPropagation()}>
            <div>Title</div>
          </ModalChoice>
        </div>
      )}
    </>
  )
}
