import type { Room, RoomPlayer } from './type'

import { useEffect } from 'react'

import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { useSessionStorage } from 'hooks'
import { huesAndCuesRoomAtom, huesAndCuesRoomPlayersAtom } from 'recoils/huesAndCues'

import { BoardGame } from './BoardGame'
import { ProfileController } from './ProfileController'
import { ScoreBoard } from './ScoreBoard'
import { subscribeRoom } from './services/subscribeRoom'
import { subscribeRoomPlayer } from './services/subscribeRoomPlayer'

const Container = tw.div`grid grid-rows-4 grid-cols-2 gap-6 p-6`
const WrapInfo = tw.div`col-span-2 row-span-1 grid grid-rows-1 grid-cols-4 gap-6`

export const HuesAndCues = () => {
  const [roomId] = useSessionStorage('roomId')

  const [, setRoom] = useRecoilState(huesAndCuesRoomAtom)
  const [, setRoomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)

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

  return (
    <Container>
      <WrapInfo>
        <ProfileController />
        <ScoreBoard />
      </WrapInfo>

      <BoardGame />
    </Container>
  )
}
