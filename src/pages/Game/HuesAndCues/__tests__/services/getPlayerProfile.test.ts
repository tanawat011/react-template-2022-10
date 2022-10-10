import type { Player } from 'pages/Game/HuesAndCues/_type'

import { getPlayerProfile } from 'pages/Game/HuesAndCues/services/getPlayerProfile'

const mockPlayer: Player = {
  uid: 'uid-xxx',
  name: 'xxx',
}

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
}))

jest.mock('helpers/firebase', () => ({
  getDocument: () => mockPlayer,
}))

describe('HuesAndCues/services', () => {
  test('getPlayerProfile()', async () => {
    const player = await getPlayerProfile('uid-xxx')

    expect(player).toMatchObject(mockPlayer)
  })
})
