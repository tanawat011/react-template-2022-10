import type { RoomPlayer } from './_type'

import tw from 'twin.macro'

import { TwCol, TwRow } from 'components/Common'
import { scoreColor } from 'data/HuesAndCues'

import { CellScoreBoard, Marker } from './Common'

const TwRowReverse = tw(TwRow)`flex-row-reverse`

type Prop = {
  playersInRoom: RoomPlayer[]
}

export const ScoreBoard: React.FC<Prop> = ({ playersInRoom }) => {
  return (
    <div className='mb-2 p-3 shadow-around'>
      <div className='pl-2 mb-1 text-white font-bold select-none'>Score Board</div>

      <TwCol className='items-start'>
        {scoreColor.map((colorSection, index) => {
          const isEven = index % 2 === 0
          const cells = colorSection.map(({ color, score }) => {
            const isFifthFit = score % 5 === 0
            const _players = playersInRoom.filter((p) => p.score === score)
            const scoreTitle = (
              <div className='text-center text-white font-semibold h-6'>{isFifthFit && score}</div>
            )

            return (
              <TwCol key={`player-color-${color}`}>
                {isEven && scoreTitle}

                <CellScoreBoard key={`player-color-${color}`} className={color}>
                  {_players.map((player) => (
                    <Marker key={`player-mark-${color}`} className={player.color} />
                  ))}
                </CellScoreBoard>

                {!isEven && scoreTitle}
              </TwCol>
            )
          })

          if (isEven) {
            return <TwRow key={`color-section-${index}`}>{cells}</TwRow>
          }

          return <TwRowReverse key={`color-section-${index}`}>{cells}</TwRowReverse>
        })}
      </TwCol>
    </div>
  )
}
