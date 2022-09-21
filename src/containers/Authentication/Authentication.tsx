import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { PATH } from 'Routes'
import { TwCol, TwRow } from 'components/Common'

const TwLoginContainer = tw(TwRow)`w-full h-screen bg-slate-300`
const TwLoginLeftSection = tw(TwCol)`w-1/2 items-center justify-center bg-slate-400`
const TwLoginRightSection = tw(TwCol)`w-1/2 items-center justify-center bg-slate-500`

export const AuthenticationContainer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    handleRedirectToLogin()
  }, [])

  const handleRedirectToLogin = () => {
    const pathAuth = `/${PATH.AUTH.ROOT}`

    if (location.pathname === pathAuth) {
      navigate(`${pathAuth}/${PATH.AUTH.LOGIN}`)
    }
  }

  return (
    <TwLoginContainer>
      <TwLoginLeftSection>Left Section</TwLoginLeftSection>

      <TwLoginRightSection>
        <Outlet />
      </TwLoginRightSection>
    </TwLoginContainer>
  )
}
