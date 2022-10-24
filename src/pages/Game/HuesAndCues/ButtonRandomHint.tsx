import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { huesAndCuesMeAtom, huesAndCuesRoomAtom } from 'recoils/huesAndCues'

import { Button } from './common'
import { setRoom } from './services'

type Prop = {
  className?: string
}

const TwButtonRandomHint = tw(
  Button,
)`w-[72px] h-[72px] bg-black bg-opacity-50 disabled:bg-black disabled:bg-opacity-50 hover:bg-black hover:bg-opacity-60`

export const ButtonRandomHint: React.FC<Prop> = ({ className }) => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)

  const randomNumber = (toNumber: number) => {
    return Math.floor(Math.random() * toNumber) + 1
  }

  const randomColorId = () => {
    const charNumber = randomNumber(16)
    const colNumber = randomNumber(30)
    const char = String.fromCharCode(charNumber + 64)

    return `${char}${colNumber}`
  }

  const handleClickRandomHint = async () => {
    let hintChoice: string[] = []

    for (let i = 1; i <= 4; i++) {
      hintChoice = [...hintChoice, randomColorId()]
    }

    await setRoom({ ...room, hintChoice })
  }

  const isHinter = me.isHinter
  const isRandomHint = Boolean(room.hintChoice.length)

  const isDisabled = [!isHinter, isRandomHint].includes(true)

  return (
    <TwButtonRandomHint className={className} disabled={isDisabled} onClick={handleClickRandomHint}>
      {isHinter ? 'Random Hint' : 'Disabled'}
    </TwButtonRandomHint>
  )
}
