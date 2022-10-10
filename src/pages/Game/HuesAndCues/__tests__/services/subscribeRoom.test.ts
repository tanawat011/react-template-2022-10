import { subscribeRoom } from 'pages/Game/HuesAndCues/services/subscribeRoom'

jest.mock('firebase/firestore', () => ({
  getFirestore: () => ({}),
}))

jest.mock('helpers/firebase', () => ({
  subscribeCollection: () => jest.fn(),
}))

describe('HuesAndCues/services', () => {
  test('subscribeRoom()', async () => {
    const unsubscribe = subscribeRoom('room-id-xxx', jest.fn())

    expect(typeof unsubscribe).toBe('function')
  })
})
