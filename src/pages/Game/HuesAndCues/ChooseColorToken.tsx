import type { RoomPlayer } from './_type'

import { TwRow } from 'components/Common'
import { colorToken } from 'data/HuesAndCues'

import { CellClickable, MarkerLG } from './Common'

type Prop = {
  currentPlayer: RoomPlayer
  playersInRoom: RoomPlayer[]
  updateCurrentPlayer: (currentPlayer: RoomPlayer) => void
}

export const ChooseColorToken: React.FC<Prop> = ({
  currentPlayer,
  playersInRoom,
  updateCurrentPlayer,
}) => {
  const handleChooseColorToken = async (color: string) => {
    const _currentPlayer: RoomPlayer = {
      ...currentPlayer,
      color,
    }

    updateCurrentPlayer(_currentPlayer)
  }

  return (
    <div className='mb-2 p-3 shadow-around'>
      <div className='pl-2 mb-1 text-white font-bold select-none'>Choose Color Token</div>

      <TwRow>
        {colorToken.map((color) => {
          const _players = playersInRoom.find((p) => p.color === color)

          if (!_players) {
            return (
              <CellClickable
                key={`choose-color-token-${color}`}
                className='bg-transparent'
                onClick={() => handleChooseColorToken(color)}
              >
                <MarkerLG className={color} />
              </CellClickable>
            )
          }
        })}
      </TwRow>
    </div>
  )
}
