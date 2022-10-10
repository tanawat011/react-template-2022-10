import { toRoom, toSetDisplayRoom, toSetupRoom } from 'pages/Game/HuesAndCues/services/navigate'

const mockNavigate = jest.fn()

describe('HuesAndCues/services', () => {
  test('toRoom()', async () => {
    const voidResult = toRoom(mockNavigate, 'room-id-xxx')

    expect(voidResult).toBe(void 0)
  })

  test('toSetDisplayRoom()', async () => {
    const voidResult = toSetDisplayRoom(mockNavigate)

    expect(voidResult).toBe(void 0)
  })

  test('toSetupRoom()', async () => {
    const voidResult = toSetupRoom(mockNavigate)

    expect(voidResult).toBe(void 0)
  })
})
