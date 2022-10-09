import type { RoomPlayer } from './_type'

import { TwRow } from 'components/Common'

import { CellClickable, MarkerLG } from './Common'

type Prop = {
  currentPlayer: RoomPlayer
  playersInRoom: RoomPlayer[]
  updateCurrentPlayer: (currentPlayer: RoomPlayer) => void
}

export const PlayerColor: React.FC<Prop> = ({ currentPlayer, playersInRoom }) => {
  return (
    <div className='mb-2 p-3 shadow-around'>
      <div className='mb-1 text-white font-bold select-none'>Player Colors</div>

      <TwRow>
        {playersInRoom
          .filter((p) => !!p.color)
          .sort((a, b) => a.number - b.number)
          .map(({ color, uid, hinter, name, isMyTurn }) => {
            const isCurrentPlayer = currentPlayer.uid === uid
            const bgHinter = hinter ? 'border-slate-500 bg-slate-600' : ''
            const bgMyTurn = isMyTurn ? 'bg-slate-400' : 'bg-transparent'

            const boxClassName = [
              'flex flex-col items-center text-white font-bold border',
              bgHinter,
            ].join(' ')

            return (
              <div key={`player-color-${color}`} className={boxClassName}>
                <CellClickable className={bgMyTurn}>
                  <MarkerLG className={color}>{isCurrentPlayer && 'U'}</MarkerLG>
                </CellClickable>

                {name}
              </div>
            )
          })}
      </TwRow>
    </div>
  )
}
