import { Link } from 'react-router-dom'

import { PATH } from 'Routes'

export const ForgotPassword = () => {
  const toForgotPassword = `../${PATH.AUTH.LOGIN}`

  return (
    <>
      <p>ForgotPassword</p>
      <Link to={toForgotPassword}>Login</Link>
    </>
  )
}
