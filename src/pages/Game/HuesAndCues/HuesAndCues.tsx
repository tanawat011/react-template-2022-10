import type { Room, RoomPlayer } from './type'

import { useEffect, useState } from 'react'

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
import { Button } from './common'
import { setRoom as svcSetRoom, updateRoomPlayer } from './services'
import { subscribeRoom } from './services/subscribeRoom'
import { subscribeRoomPlayer } from './services/subscribeRoomPlayer'

const Container = tw.div`grid grid-rows-4 grid-cols-2 gap-6 p-6`
const WrapInfo = tw.div`col-span-2 row-span-1 grid grid-rows-1 grid-cols-4 gap-6`
const ModalChoice = tw(TwCard)`absolute-center z-50 bg-slate-700 p-6`

export const HuesAndCues = () => {
  const [roomId] = useSessionStorage('roomId')
  const [meId] = useSessionStorage('meId')

  const [room, setRoom] = useRecoilState(huesAndCuesRoomAtom)
  const [players, setPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [me, setMe] = useRecoilState(huesAndCuesMeAtom)
  const [modalChoice, setModalChoice] = useRecoilState(huesAndCuesModalChoiceAtom)

  const [hintWord, setHintWord] = useState('')

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
      setPlayers(_roomPlayers)

      const _me = _roomPlayers.find((rp) => rp.player.id === meId) as RoomPlayer

      setMe(_me)
    }

    unsubscribeRoomPlayers = subscribeRoomPlayer(_roomId, callback)
  }

  const handleCancelModalChoice = () => {
    setModalChoice({ isOpen: false, colorId: '', colorBg: '', isFromClickNextTurn: false })
  }

  const handleSubmitModalChoice = () => {
    handleCancelModalChoice()

    setHintWord('')

    svcSetRoom({
      ...room,
      hintSelected: modalChoice.colorId,
      hintWords: [...room.hintWords, hintWord],
    })

    if (modalChoice.isFromClickNextTurn) {
      let nextPlayer = players.find((p) => p.seq === me.seq + 1)

      if (!nextPlayer) {
        nextPlayer = players.find((p) => p.seq === 1) as RoomPlayer
      }

      updateRoomPlayer(room.id, { ...nextPlayer, isTurn: true })
      updateRoomPlayer(room.id, { ...me, isTurn: false, totalTurn: me.totalTurn + 1 })
    }
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
          className='absolute-center bg-black bg-opacity-80 z-40 w-full h-full text-center'
          onClick={handleCancelModalChoice}
        >
          <ModalChoice className='' onClick={(e) => e.stopPropagation()}>
            <span className='text-white font-bold'>Hint Word</span>

            <div className='flex items-center justify-center flex-col mt-6'>
              <div className={`h-7 w-7 rounded ${modalChoice.colorBg} text-center`}>
                <span className='text-white font-bold text-xs'>{modalChoice.colorId}</span>
              </div>

              <input
                className='mt-4 rounded p-1 px-2 outline-0'
                type='text'
                placeholder='Please enter your hint'
                value={hintWord}
                onChange={(e) => setHintWord(e.target.value)}
              />

              <div className='flex mt-4'>
                <Button className='w-auto p-2 px-3' onClick={handleSubmitModalChoice}>
                  Submit
                </Button>
                <Button className='ml-3 w-auto p-2 px-3' onClick={handleCancelModalChoice}>
                  Cancel
                </Button>
              </div>
            </div>
          </ModalChoice>
        </div>
      )}
    </>
  )
}
