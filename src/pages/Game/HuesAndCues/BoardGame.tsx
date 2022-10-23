import tw from 'twin.macro'

import { TwCard } from 'components/Common'
import { getColTitles, getRowTitles, huesAndCues } from 'data/HuesAndCues'

const BoardGameCard = tw(TwCard)`col-span-2 row-span-3 grid gap-2`
const BoardGameCenter = tw.div`grid grid-flow-col gap-2`
const BoardGameContent = tw.div`grid gap-2`
const BoardGameContentRow = tw.div`grid grid-flow-col gap-2`
const BoardGameContentCell = tw.div`h-6 w-6`

const BoardGameColTitles = () => (
  <div className='grid grid-flow-col gap-2'>
    {['', ...getColTitles(), ''].map((title, index) => {
      return (
        <div key={`col-title-${title}-${index}`} className='h-6 w-6 text-center'>
          {title}
        </div>
      )
    })}
  </div>
)

const BoardGameRowTitles = () => (
  <div className='grid gap-2'>
    {getRowTitles().map((title, index) => {
      return (
        <div key={`row-title-${title}-${index}`} className='h-6 w-6 text-center'>
          {title}
        </div>
      )
    })}
  </div>
)

export const BoardGame = () => {
  return (
    <BoardGameCard>
      <BoardGameColTitles />

      <BoardGameCenter>
        <BoardGameRowTitles />

        <BoardGameContent>
          {huesAndCues.map((items, index) => {
            return (
              <BoardGameContentRow key={`hues-and-cues-${index}`}>
                {items.map((item) => {
                  const itemId = item.id
                  const itemColor = item.color

                  return (
                    <BoardGameContentCell
                      key={`${itemColor}-${itemId}`}
                      className={itemColor}
                    ></BoardGameContentCell>
                  )
                })}
              </BoardGameContentRow>
            )
          })}
        </BoardGameContent>

        <BoardGameRowTitles />
      </BoardGameCenter>

      <BoardGameColTitles />
    </BoardGameCard>
  )
}
