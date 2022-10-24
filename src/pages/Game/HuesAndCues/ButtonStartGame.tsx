import { useRecoilState } from 'recoil'

import { IconCaretRight } from 'components/Icons'
import { huesAndCuesMeAtom, huesAndCuesRoomAtom } from 'recoils/huesAndCues'

import { Button } from './common'
import { setRoom } from './services'

// * This button will clickable when the player is a `owner`, So in this button will call the current player is a `owner`
export const ButtonStartGame = () => {
  const [room] = useRecoilState(huesAndCuesRoomAtom)
  const [me] = useRecoilState(huesAndCuesMeAtom)

  const handleClickStartGame = async () => {
    await setRoom({ ...room, isStarted: true })
  }

  const isHinter = me.isHinter
  const isSelected = Boolean(room.hintSelected)
  const isStarted = room.isStarted

  // * Disabled when started game or you are not a `owner`
  const isDisabled = [!isHinter, isStarted, !isSelected].includes(true)

  return (
    <Button disabled={isDisabled} onClick={handleClickStartGame}>
      <IconCaretRight />
    </Button>
  )
}
