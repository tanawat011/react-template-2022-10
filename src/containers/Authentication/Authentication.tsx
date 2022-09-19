import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { PATH } from 'Routes'

export const AuthenticationContainer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    handleRedirectToLogin()
  }, [])

  const handleRedirectToLogin = () => {
    const pathAuth = `/${PATH.AUTH._PATH}`

    if (location.pathname === pathAuth) {
      navigate(`${pathAuth}/${PATH.AUTH.LOGIN}`)
    }
  }

  return (
    <>
      <p>AuthenticationContainer</p>
      <Outlet />
    </>
  )
}
