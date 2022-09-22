import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const ForgotPassword = () => {
  return (
    <>
      <div id='forgot-password-form'>
        <h1>Forgot Password</h1>

        <form className='flex flex-col'>
          <label id='username'>Email</label>
          <input id='username' />

          <div className='flex'>
            <Button link to={`../${PATH.AUTH.LOGIN}`}>
              Back to Login
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
