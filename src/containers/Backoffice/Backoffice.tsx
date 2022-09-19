import { useEffect } from 'react'

import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

import { PATH } from 'Routes'

export const BackofficeContainer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const homePath = `../${PATH.BACKOFFICE.HOME}`

  useEffect(() => {
    handleRedirectToHome()
  }, [])

  const handleRedirectToHome = () => {
    const defaultPaths = ['', '/']

    if (defaultPaths.includes(location.pathname)) {
      navigate(homePath)
    }
  }

  return (
    <>
      <p>BackofficeContainer</p>
      <Link to={homePath}>Home</Link>
      <Link to={`../${PATH.BACKOFFICE.TODO}`}>Todo</Link>
      <Link to={`../${PATH.BACKOFFICE.ABOUT}`}>About</Link>
      <Link to={`../${PATH.BACKOFFICE.ABOUT2}`}>About2</Link>
      <Link to={`/${PATH.AUTH._PATH}`}>Logout</Link>
      <Outlet />
    </>
  )
}
