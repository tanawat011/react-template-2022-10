import { renderWithProviders } from 'helpers/test'

import { DisplayMiniColorToken } from '../DisplayMiniColorToken'
import { getMockPlayersInRoom } from '../mock'

jest.mock('../services')

describe('<DisplayMiniColorToken />', () => {
  test('render snapshot', async () => {
    const players = getMockPlayersInRoom({ p1: { isHinter: true } })

    const { asFragment } = renderWithProviders(<DisplayMiniColorToken roomPlayers={players} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
