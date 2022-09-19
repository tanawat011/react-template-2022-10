import { Link } from 'react-router-dom'

import { PATH } from 'Routes'

export const Login = () => {
  return (
    <>
      <p>Login</p>
      <Link to={`/${PATH.BACKOFFICE.HOME}`}>Login</Link>
      <Link to={`../${PATH.AUTH.FORGOT_PASSWORD}`}>Forgot Password</Link>
    </>
  )
}
