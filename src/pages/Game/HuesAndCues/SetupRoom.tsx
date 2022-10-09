import type { Player } from './_type'

import type { FormEvent, MouseEvent } from 'react'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'
import { useSessionStorage } from 'hooks'

import { SESSION } from './_constants'
import {
  getPlayerProfile,
  setPlayerInTheRoom,
  toRoom,
  toSetDisplayRoom,
  toSetupRoom,
} from './services'

export const SetupRoom = () => {
  const navigate = useNavigate()
  const [sessionId] = useSessionStorage(SESSION.ID)
  const [roomId, setRoomId] = useSessionStorage(SESSION.ROOM_ID)

  const [player, setPlayer] = useState<Player>()

  useEffect(() => {
    if (!sessionId) {
      toSetDisplayRoom(navigate)

      return
    }

    if (roomId) {
      toRoom(navigate, roomId)

      return
    }

    fetchPlayer()
  }, [])

  const fetchPlayer = async () => {
    const _player = await getPlayerProfile(sessionId)

    setPlayer(_player)
  }

  const handleCreatePublicRoom = async (e: MouseEvent) => {
    e.preventDefault()

    if (player) {
      const uid = sessionId
      const _roomId = sessionId

      try {
        // * Create room and add player to the room
        await setPlayerInTheRoom(_roomId, {
          uid,
          name: player.name,
          score: 0,
          color: '',
          cells: [],
          number: 1,
          hinter: true, // * The first player is the hinter
          owner: true, // * Owner is the first player to join the room
        })

        setRoomId(_roomId)

        toRoom(navigate, _roomId)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error)
      }
    }
  }

  const handleCreatePrivateRoom = async (e: MouseEvent) => {
    e.preventDefault()

    try {
      toSetupRoom(navigate)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  const handlerSubmitJoinPrivateRoom = async (e: FormEvent) => {
    e.preventDefault()

    // eslint-disable-next-line no-console
    console.log('handlerSubmitJoinPrivateRoom')
  }

  return (
    <div>
      <Button type='button' onClick={handleCreatePublicRoom}>
        Create Public Room
      </Button>

      <Button type='button' onClick={handleCreatePrivateRoom}>
        Create Private Room
      </Button>

      <form onSubmit={handlerSubmitJoinPrivateRoom}>
        <label id='code'>Code</label>
        <input id='code' />
        <Button type='submit'>Join Private Room</Button>
      </form>
    </div>
  )
}
