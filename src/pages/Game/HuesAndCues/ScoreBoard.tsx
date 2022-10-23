import tw from 'twin.macro'

import { TwCard } from 'components/Common'

const ScoreBoardCard = tw(TwCard)`col-span-3`

export const ScoreBoard = () => {
  return <ScoreBoardCard>Score Board</ScoreBoardCard>
}
