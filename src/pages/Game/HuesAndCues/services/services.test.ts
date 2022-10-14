import type { Room, RoomPlayer } from '../type'

import { mocked } from 'jest-mock'

import {
  getAllDocuments,
  getDocument,
  getDocumentWithRef,
  subscribeCollection,
  subscribeDocument,
} from 'helpers/firebase'
import { getMockDocumentSnapshotDocs, getMockQuerySnapshotDocs } from 'mocks/firestore'

import { getMockPlayers, getMockPlayersInRoom, getMockRoom } from '../mock'

import { deleteAllGlobalPlayers } from './deleteAllGlobalPlayers'
import { deletePlayer } from './deletePlayer'
import { deleteRoom } from './deleteRoom'
import { deleteRoomPlayer } from './deleteRoomPlayer'
import { getAllRoomPlayers } from './getAllRoomPlayers'
import { getRoomPlayer } from './getRoomPlayer'
import { setPlayer } from './setPlayer'
import { setRoom } from './setRoom'
import { setRoomPlayer } from './setRoomPlayer'
import { subscribeRoom } from './subscribeRoom'
import { subscribeRoomPlayer } from './subscribeRoomPlayer'

describe('HuesAndCues/services', () => {
  test('deleteAllGlobalPlayers()', async () => {
    const voidResult = await deleteAllGlobalPlayers(getMockPlayersInRoom())

    expect(voidResult).toBe(void 0)
  })

  test('deletePlayer()', async () => {
    const voidResult = await deletePlayer('player-id-xxx')

    expect(voidResult).toBe(void 0)
  })

  test('deleteRoom()', async () => {
    const voidResult = await deleteRoom('room-id-xxx')

    expect(voidResult).toBe(void 0)
  })

  test('deleteRoomPlayer()', async () => {
    const voidResult = await deleteRoomPlayer('room-id-xxx', 'player-id-xxx')

    expect(voidResult).toBe(void 0)
  })

  test('getAllRoomPlayers()', async () => {
    const players = getMockPlayers()
    const playersInRoom = getMockPlayersInRoom()

    mocked(getAllDocuments).mockResolvedValue(getMockQuerySnapshotDocs(playersInRoom[0]))
    mocked(getDocumentWithRef).mockResolvedValue(getMockDocumentSnapshotDocs(players[0]))

    const result = await getAllRoomPlayers('room-id-xxx')

    expect(result).toEqual([playersInRoom[0]])
  })

  test('getRoomPlayer()', async () => {
    const players = getMockPlayers()
    const playersInRoom = getMockPlayersInRoom()

    mocked(getDocument).mockResolvedValue(getMockDocumentSnapshotDocs(playersInRoom[0]))
    mocked(getDocumentWithRef).mockResolvedValue(getMockDocumentSnapshotDocs(players[0]))

    const result = await getRoomPlayer('room-id-xxx', 'player-id-xxx')

    expect(result).toEqual(playersInRoom[0])
  })

  test('setPlayer()', async () => {
    const voidResult = await setPlayer(getMockPlayersInRoom()[0].player)

    expect(voidResult).toBe(void 0)
  })

  test('setRoom()', async () => {
    const voidResult = await setRoom(getMockRoom())

    expect(voidResult).toBe(void 0)
  })

  test('setRoomPlayer()', async () => {
    const voidResult = await setRoomPlayer('room-id-xxx', getMockPlayersInRoom()[0])

    expect(voidResult).toBe(void 0)
  })

  test('subscribeRoom()', async () => {
    const room = getMockRoom()

    mocked(subscribeDocument).mockImplementation((_: unknown, callback) => {
      callback(getMockDocumentSnapshotDocs(room))

      return jest.fn()
    })

    const callback = (payload: Room) => {
      expect(payload).toEqual(room)
    }
    const unsubscribe = subscribeRoom('room-id-xxx', callback)

    expect(typeof unsubscribe).toBe('function')
  })

  test('subscribeRoomPlayer()', async () => {
    const players = getMockPlayers()
    const roomPlayers = getMockPlayersInRoom()

    mocked(getDocumentWithRef).mockResolvedValue(getMockDocumentSnapshotDocs(players[0]))
    mocked(subscribeCollection).mockImplementation((_: unknown, callback) => {
      callback(getMockQuerySnapshotDocs(roomPlayers[0]))

      return jest.fn()
    })

    const callback = (payload: RoomPlayer[]) => {
      expect(payload).toEqual([roomPlayers[0]])
    }
    const unsubscribe = subscribeRoomPlayer('room-id-xxx', callback)

    expect(typeof unsubscribe).toBe('function')
  })
})
