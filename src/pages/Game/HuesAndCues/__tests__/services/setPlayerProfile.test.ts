import type { Player } from 'pages/Game/HuesAndCues/_type'

import { setPlayerProfile } from 'pages/Game/HuesAndCues/services/setPlayerProfile'

const mockPlayer: Player = {
  uid: 'uid-xxx',
  name: 'xxx',
}

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
}))

jest.mock('helpers/firebase', () => ({
  setDocument: () => ({}),
}))

describe('HuesAndCues/services', () => {
  test('setPlayerProfile()', async () => {
    const voidResult = await setPlayerProfile(mockPlayer)

    expect(voidResult).toBe(void 0)
  })
})
