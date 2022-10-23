import tw from 'twin.macro'

import { TwCard } from 'components/Common'

const ProfileControllerCard = tw(TwCard)`col-span-1`

export const ProfileController = () => {
  return <ProfileControllerCard>Profile Controller</ProfileControllerCard>
}
