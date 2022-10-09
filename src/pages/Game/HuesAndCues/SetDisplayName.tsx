import type { CustomEventTarget } from 'types/html'

import type { FormEvent } from 'react'
import { useEffect } from 'react'

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
  const [sessionId, setSessionId] = useSessionStorage(SESSION.ID)
  const [roomId] = useSessionStorage(SESSION.ROOM_ID)
  const [tempSessionId, , removeTempSessionId] = useSessionStorage(SESSION.TEMP_ID)
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionId) {
      toSetupRoom(navigate)
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const target = e.target as CustomEventTarget<{ displayName: { value: string } }>
    const displayName = target.displayName.value
    const uid = tempSessionId || sessionId || uuid()

    if (displayName) {
      try {
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
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label id='displayName'>Display Name</label>
        <input id='displayName' />
        <Button type='submit'>GO</Button>
      </form>
    </div>
  )
}
