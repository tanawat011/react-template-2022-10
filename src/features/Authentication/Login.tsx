import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Login = () => {
  return (
    <>
      <div id='login-form'>
        <h1>Login</h1>

        <form className='flex flex-col'>
          <label id='username'>Username</label>
          <input id='username' />
          <label id='password'>Password</label>
          <input id='password' />

          <div className='flex'>
            <Button link to={`/${PATH.BACKOFFICE.HOME}`}>
              Login
            </Button>
            <Button link to={`../${PATH.AUTH.FORGOT_PASSWORD}`}>
              Forgot Password
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
