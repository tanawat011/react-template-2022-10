import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { TwCard } from 'components/Common'
import {
  IconClipboardQuestion,
  IconPersonCircleCheck,
  IconPersonCircleXMark,
} from 'components/Icons'
import { huesAndCuesRoomPlayersAtom } from 'recoils/huesAndCues'

const CircleWithBorder = tw.div`rounded-full border-2 border-white`

const ScoreBoardCard = tw(TwCard)`col-span-3 grid grid-flow-col`
const ProfileTokenWrap = tw.div`grid-self-center`
const ProfileToken = tw(CircleWithBorder)`w-12 h-12 relative`
const ProfileTitle = tw.div`absolute-center text-white font-bold`
const ProfileName = tw.div`text-white font-bold grid-self-center`

export const ScoreBoardWithAllProfile = () => {
  const [roomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)

  return (
    <ScoreBoardCard>
      {roomPlayers.map((rp) => {
        return (
          <div key={`score-board-with-profile-${rp.player.id}`} className='grid grid-self-center'>
            <ProfileTokenWrap>
              <ProfileToken className={rp.color}>
                <ProfileTitle>{rp.score}</ProfileTitle>
              </ProfileToken>
            </ProfileTokenWrap>

            <ProfileName>{rp.player.name}</ProfileName>

            <div className='grid-self-center grid grid-flow-col gap-2'>
              {rp.isHinter && <IconClipboardQuestion />}

              {rp.isTurn ? (
                <IconPersonCircleCheck className={rp.isTurn ? 'fill-black' : 'fill-gray-600'} />
              ) : (
                <IconPersonCircleXMark className={rp.isTurn ? 'fill-black' : 'fill-gray-600'} />
              )}
            </div>
          </div>
        )
      })}
    </ScoreBoardCard>
  )
}
