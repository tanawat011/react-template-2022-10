import { Outlet } from 'react-router-dom'
import tw from 'twin.macro'

import { TwCol, TwRow } from 'components/Common'

const TwErrorContainer = tw(TwRow)`w-full h-screen items-center justify-center bg-slate-400`
const TwErrorCard = tw(TwCol)`p-12 rounded-xl bg-slate-500`

export const ErrorContainer: React.FC = () => {
  return (
    <TwErrorContainer>
      <TwErrorCard>
        <h1>ErrorContainer</h1>

        <Outlet />
      </TwErrorCard>
    </TwErrorContainer>
  )
}
