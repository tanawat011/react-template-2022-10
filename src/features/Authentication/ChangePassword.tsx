import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const ChangePassword = () => {
  return (
    <>
      <div id='change-password-form'>
        <h1>Change Password</h1>

        <form className='flex flex-col'>
          <label id='password'>Old Password</label>
          <input id='password' />
          <label id='newPassword'>New Password</label>
          <input id='newPassword' />

          <div className='flex'>
            <Button link to={`../${PATH.AUTH.LOGIN}`}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
