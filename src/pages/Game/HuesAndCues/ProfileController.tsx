import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { TwCard } from 'components/Common'
import { huesAndCuesMeAtom, huesAndCuesRoomPlayersAtom } from 'recoils/huesAndCues'

import { ButtonDangerMenu } from './ButtonDangerMenu'
import { ButtonNextHinter } from './ButtonNextHinter'
import { ButtonNextTurn } from './ButtonNextTurn'
import { ButtonStartGame } from './ButtonStartGame'
import { ButtonSubmitResult } from './ButtonSubmitResult'
import { ChooseHintChoice } from './ChooseHintChoice'

const CircleWithBorder = tw.div`rounded-full border border-white`
const PlayerToken = tw(CircleWithBorder)`w-3 h-3`

const ProfileControllerCard = tw(TwCard)`col-span-1`
const ProfileWrap = tw.div`grid grid-cols-3 grid-rows-2`
const AllPlayersTokenWrap = tw.div`grid grid-cols-3 grid-rows-3 gap-1 grid-self-center`
const ProfileTokenWrap = tw.div`grid-self-center`
const ProfileToken = tw(CircleWithBorder)`w-12 h-12 relative border-2`
const ProfileTitle = tw.div`absolute-center text-white font-bold`
const ProfileName = tw.div`col-span-3 text-white font-bold grid-self-center`

export const ProfileController = () => {
  const [roomPlayers] = useRecoilState(huesAndCuesRoomPlayersAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)

  return (
    <ProfileControllerCard>
      <ProfileWrap>
        <AllPlayersTokenWrap>
          {roomPlayers.map((rp) => {
            return <PlayerToken key={`players-token-color-${rp.color}`} className={rp.color} />
          })}
        </AllPlayersTokenWrap>

        <ProfileTokenWrap>
          <ProfileToken className={me.color}>
            <ProfileTitle>{me.player.name[0]?.toUpperCase()}</ProfileTitle>
          </ProfileToken>
        </ProfileTokenWrap>

        <div className='flex justify-end'>
          <ButtonDangerMenu />
        </div>

        <ProfileName>{me.player.name}</ProfileName>
      </ProfileWrap>

      <div className='grid grid-flow-col'>
        <ChooseHintChoice />

        <div className='rounded-full border border-white w-0.5 justify-self-center'></div>
        <div className='grid grid-cols-2 grid-rows-2 grid-self-center gap-2'>
          <ButtonStartGame />
          <ButtonNextHinter />
          <ButtonNextTurn />
          <ButtonSubmitResult />
        </div>
      </div>
    </ProfileControllerCard>
  )
}
