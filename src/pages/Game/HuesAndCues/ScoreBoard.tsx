import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { TwCard } from 'components/Common'
import { scoreColor } from 'data/HuesAndCues'
import { huesAndCuesRoomPlayersAtom } from 'recoils/huesAndCues'

const ScoreBoardCard = tw(TwCard)`col-span-3 grid`
const ScoreBoardWrap = tw.div`grid grid-flow-row gap-2 self-center justify-self-center`
const ScoreBoardColWrap = tw.div`grid grid-flow-col gap-2`
const ScoreBoardCellWrap = tw.div`grid grid-flow-row h-16 w-7 p-1 grid-cols-2 grid-rows-7 gap-1`
const SelectorTokenWrap = tw.div`col-span-2 row-span-5 grid grid-cols-2 grid-rows-5 gap-1`
const SelectorToken = tw.div`w-2 h-2 rounded-full border border-white`
const Score = tw.div`col-span-2 row-span-2 self-center justify-self-center text-white font-bold`

export const ScoreBoard = () => {
  const [roomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)

  return (
    <ScoreBoardCard>
      <ScoreBoardWrap>
        {scoreColor.map((sections, index) => {
          const cellWrap = sections.map(({ color, score }) => {
            return (
              <ScoreBoardCellWrap key={`score-board-color-${color}`} className={color}>
                <SelectorTokenWrap>
                  {roomPlayers
                    .filter((rp) => rp.score === score)
                    .map((rp) => {
                      return (
                        <SelectorToken
                          key={`score-board-player-${rp.player.name}`}
                          className={rp.color}
                        />
                      )
                    })}
                </SelectorTokenWrap>

                <Score>{score % 5 === 0 && score}</Score>
              </ScoreBoardCellWrap>
            )
          })

          return (
            <ScoreBoardColWrap key={`score-board-color-section-${index}`}>
              {index ? cellWrap.reverse() : cellWrap}
            </ScoreBoardColWrap>
          )
        })}
      </ScoreBoardWrap>
    </ScoreBoardCard>
  )
}
