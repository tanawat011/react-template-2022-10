import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { TwCard } from 'components/Common'
import { getColTitles, getRowTitles, huesAndCues } from 'data/HuesAndCues'
import { huesAndCuesRoomAtom, huesAndCuesRoomPlayersAtom } from 'recoils/huesAndCues'

const BoardGameCard = tw(TwCard)`col-span-2 row-span-3 grid gap-2`
const BoardGameWrap = tw.div`m-auto grid gap-2`
const BoardGameMiddleSection = tw.div`grid grid-flow-col gap-2`
const BoardGameContent = tw.div`grid gap-2`
const CellWrap = tw.div`grid grid-flow-col gap-2`
const CellBG = tw.div`h-6 w-6 relative`
const Cell = tw(CellBG)`z-10 p-1 cursor-pointer hover:p-0.5 hover:border-2 hover:border-white`
const ColTitlesWrap = tw.div`grid grid-flow-col gap-2`
const ColTitle = tw.div`h-6 w-6 text-center text-white font-bold`
const RowTitlesWrap = tw.div`grid gap-2`
const RowTitle = tw.div`h-6 w-6 text-center text-white font-bold`
const SelectorToken = tw.div`w-4 h-4 rounded-full border border-white `
const HintResult = tw.div`absolute border-4 border-black rounded h-24 w-24 -top-9 -left-9 bg-transparent`

const ColTitles = () => (
  <ColTitlesWrap>
    {['', ...getColTitles(), ''].map((title, index) => (
      <ColTitle key={`col-title-${title}-${index}`}>{title}</ColTitle>
    ))}
  </ColTitlesWrap>
)

const RowTitles = () => (
  <RowTitlesWrap>
    {getRowTitles().map((title, index) => (
      <RowTitle key={`row-title-${title}-${index}`}>{title}</RowTitle>
    ))}
  </RowTitlesWrap>
)

export const BoardGame = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [roomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)

  return (
    <BoardGameCard>
      <BoardGameWrap>
        <ColTitles />

        <BoardGameMiddleSection>
          <RowTitles />

          <BoardGameContent>
            {huesAndCues.map((items, index) => {
              return (
                <CellWrap key={`hues-and-cues-${index}`}>
                  {items.map((item) => {
                    const itemId = item.id
                    const itemColor = item.color

                    const roomPlayerSelected = roomPlayers.find((rp) =>
                      rp.allSelected.includes(itemId),
                    )

                    const isRoomResult = room.hintSelected === itemId

                    return (
                      <CellBG key={`${itemColor}-${itemId}`}>
                        <Cell className={itemColor}>
                          {roomPlayerSelected && (
                            <SelectorToken className={roomPlayerSelected.color} />
                          )}
                        </Cell>

                        {isRoomResult && <HintResult />}
                      </CellBG>
                    )
                  })}
                </CellWrap>
              )
            })}
          </BoardGameContent>

          <RowTitles />
        </BoardGameMiddleSection>

        <ColTitles />
      </BoardGameWrap>
    </BoardGameCard>
  )
}
