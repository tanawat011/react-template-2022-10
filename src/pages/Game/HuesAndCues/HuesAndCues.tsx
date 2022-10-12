import type { RoomPlayer } from './_type'
import type { Unsubscribe } from 'firebase/firestore'

import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { TwCol } from 'components/Common'
import { useSessionStorage } from 'hooks'

import { Board } from './Board'
import { ChooseColorHint } from './ChooseColorHint'
import { ChooseColorToken } from './ChooseColorToken'
import { NextHinter } from './NextHinter'
import { NextRound } from './NextRound'
import { PlayerColor } from './PlayerColor'
import { RemoveRoom } from './RemoveRoom'
import { ResetRoom } from './ResetRoom'
import { ScoreBoard } from './ScoreBoard'
import { StartGame } from './StartGame'
import { SubmitResult } from './SubmitResult'
import { SESSION } from './_constants'
import {
  getAllPlayersInTheRoom,
  getPlayerInTheRoom,
  setPlayerInTheRoom,
  subscribeRoom,
  toSetDisplayRoom,
} from './services'

export const HuesAndCues = () => {
  const urlParam = useParams<{ roomId: string }>()
  const navigate = useNavigate()

  const [sessionId, , removeSessionId] = useSessionStorage(SESSION.ID)
  const [roomId, setRoomId, removeRoomId] = useSessionStorage(SESSION.ROOM_ID)
  const [tempSessionId, setTempSessionId, removeTempSessionId] = useSessionStorage(SESSION.TEMP_ID)

  const [playersInRoom, setPlayersInRoom] = useState<RoomPlayer[]>([])
  const [currentPlayer, setCurrentPlayer] = useState<RoomPlayer>()

  let unsubscribe: Unsubscribe = () => {
    return
  }

  useEffect(() => {
    checkRoomAndFetchData()

    return () => {
      unsubscribe()
    }
  }, [])

  const checkRoomAndFetchData = async () => {
    const _roomId = urlParam.roomId || ''

    const _playersInRoom = await getAllPlayersInTheRoom(_roomId)

    if (!_playersInRoom.length) {
      removeSessionId()
      removeRoomId()
      removeTempSessionId()

      toSetDisplayRoom(navigate)

      return
    }

    if (!sessionId) {
      const _sessionId = tempSessionId || uuid()

      setRoomId(_roomId)
      setTempSessionId(_sessionId)

      toSetDisplayRoom(navigate)

      return
    }

    await fetchCurrentPlayer()

    fetchPlayersInRoom()
  }

  const fetchCurrentPlayer = async () => {
    const data = await getPlayerInTheRoom(roomId, sessionId)

    setCurrentPlayer(data)
  }

  const updateCurrentPlayer = async (_currentPlayer: RoomPlayer) => {
    setCurrentPlayer(_currentPlayer)

    await setPlayerInTheRoom(roomId, _currentPlayer)
  }

  const fetchPlayersInRoom = () => {
    const callback = (data: RoomPlayer[]) => {
      setPlayersInRoom(data)
      fetchCurrentPlayer()
    }

    unsubscribe = subscribeRoom(roomId, callback)
  }

  const isOwnerRoom = currentPlayer && currentPlayer.owner
  const isStartGame = playersInRoom.findIndex((p) => p.isStartGame) > -1
  const isHinter = currentPlayer && currentPlayer.hinter
  const isPlayerNoColor = currentPlayer && !currentPlayer.color
  const isPlayerHasColor = currentPlayer && currentPlayer.color

  return (
    <TwCol className='p-6'>
      {isOwnerRoom && (
        <>
          <RemoveRoom roomId={roomId} />

          <ResetRoom
            roomId={roomId}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />

          <StartGame
            roomId={roomId}
            playersInRoom={playersInRoom}
            currentPlayer={currentPlayer}
            updateCurrentPlayer={updateCurrentPlayer}
          />
        </>
      )}

      {currentPlayer?.hinter && (
        <>
          <NextHinter
            roomId={roomId}
            playersInRoom={playersInRoom}
            currentPlayer={currentPlayer}
            updateCurrentHinter={updateCurrentPlayer}
          />

          <SubmitResult
            roomId={roomId}
            playersInRoom={playersInRoom}
            currentPlayer={currentPlayer}
            updateCurrentPlayer={updateCurrentPlayer}
          />

          <NextRound
            roomId={roomId}
            playersInRoom={playersInRoom}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />
        </>
      )}

      <ScoreBoard playersInRoom={playersInRoom} />

      {isPlayerNoColor && (
        <ChooseColorToken
          currentPlayer={currentPlayer}
          playersInRoom={playersInRoom}
          updateCurrentPlayer={updateCurrentPlayer}
        />
      )}

      {isPlayerHasColor && (
        <>
          <PlayerColor
            currentPlayer={currentPlayer}
            playersInRoom={playersInRoom}
            updateCurrentPlayer={updateCurrentPlayer}
          />

          {isHinter && (
            <ChooseColorHint
              currentPlayer={currentPlayer}
              updateCurrentPlayer={updateCurrentPlayer}
            />
          )}

          {isStartGame && (
            <Board
              roomId={roomId}
              currentPlayer={currentPlayer}
              playersInRoom={playersInRoom}
              updateCurrentPlayer={updateCurrentPlayer}
            />
          )}
        </>
      )}
    </TwCol>
  )
}
