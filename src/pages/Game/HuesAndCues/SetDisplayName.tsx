import type { FormEvent } from 'react'
import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { Button } from 'components/Button'
import { useSessionStorage } from 'hooks'

import { SESSION } from './_constants'
import {
  setPlayerProfile,
  setPlayerInTheRoom,
  getAllPlayersInTheRoom,
  toSetupRoom,
  toRoom,
} from './services'

export const SetDisplayName = () => {
  const navigate = useNavigate()

  const [sessionId, setSessionId] = useSessionStorage(SESSION.ID)
  const [roomId] = useSessionStorage(SESSION.ROOM_ID)
  const [tempSessionId, , removeTempSessionId] = useSessionStorage(SESSION.TEMP_ID)

  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    if (sessionId) {
      toSetupRoom(navigate)
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const uid = tempSessionId || sessionId || uuid()

      if (displayName) {
        setSessionId(uid)

        // * Create a new player
        await setPlayerProfile({
          uid,
          name: displayName,
        })

        if (tempSessionId) {
          const playersInRoom = await getAllPlayersInTheRoom(roomId)

          // * If there is no that player in the room, add the player to the room
          await setPlayerInTheRoom(roomId, {
            uid,
            name: displayName,
            score: 0,
            color: '',
            cells: [],
            number: playersInRoom.length + 1,
            owner: false,
          })

          removeTempSessionId()

          toRoom(navigate, roomId)

          return
        }

        toSetupRoom(navigate)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label id='displayName'>Display Name</label>
        <input
          id='displayName'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Button type='submit'>GO</Button>
      </form>
    </div>
  )
}
