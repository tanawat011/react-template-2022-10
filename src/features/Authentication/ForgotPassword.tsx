import { Link } from 'react-router-dom'

import { PATH } from 'Routes'

export const ForgotPassword = () => {
  return (
    <>
      <p>ForgotPassword</p>
      <Link to={`../${PATH.AUTH.LOGIN}`}>Login</Link>
    </>
  )
}
