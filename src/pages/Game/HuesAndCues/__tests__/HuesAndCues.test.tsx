import { renderWithProviders } from 'helpers/test'

import { GameHuesAndCues } from '../HuesAndCues'

jest.mock('../Board', () => ({
  Board: () => <div>Board</div>,
}))

jest.mock('../ChooseColorHint', () => ({
  ChooseColorHint: () => <div>ChooseColorHint</div>,
}))

jest.mock('../ChooseColorToken', () => ({
  ChooseColorToken: () => <div>ChooseColorToken</div>,
}))

jest.mock('../NextHinter', () => ({
  NextHinter: () => <div>NextHinter</div>,
}))

jest.mock('../NextRound', () => ({
  NextRound: () => <div>NextRound</div>,
}))

jest.mock('../PlayerColor', () => ({
  PlayerColor: () => <div>PlayerColor</div>,
}))

jest.mock('../RemoveRoom', () => ({
  RemoveRoom: () => <div>RemoveRoom</div>,
}))

jest.mock('../ResetRoom', () => ({
  ResetRoom: () => <div>ResetRoom</div>,
}))

jest.mock('../ScoreBoard', () => ({
  ScoreBoard: () => <div>ScoreBoard</div>,
}))

jest.mock('../StartGame', () => ({
  StartGame: () => <div>StartGame</div>,
}))

jest.mock('../SubmitResult', () => ({
  SubmitResult: () => <div>SubmitResult</div>,
}))

jest.mock('../services', () => ({
  getAllPlayersInTheRoom: () => [],
  getPlayerInTheRoom: () => ({ uid: 'xxx' }),
  setPlayerInTheRoom: () => ({ uid: 'xxx' }),
  subscribeRoom: () => [],
  toSetDisplayRoom: () => ({ uid: 'xxx', name: 'ta' }),
}))

describe('<GameHuesAndCues />', () => {
  test('match snapshot', () => {
    const { asFragment } = renderWithProviders(<GameHuesAndCues />)
    expect(asFragment()).toMatchSnapshot()
  })
})
