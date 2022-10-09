// import type { CustomEventTarget } from 'types/html'

import type { FormEvent } from 'react'

// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Login = () => {
  // const auth = getAuth()

  const navigate = useNavigate()

  const submitLogin = async (e: FormEvent) => {
    e.preventDefault()

    navigate(`/${PATH.BACKOFFICE.HOME}`)

    // try {
    //   const target = e.target as CustomEventTarget<{
    //     username: { value: string }
    //     password: { value: string }
    //   }>

    //   const username = target.username.value
    //   const password = target.password.value

    //   const response = await signInWithEmailAndPassword(auth, username, password)

    //   if (response) {
    //     const session = {
    //       uid: response.user.uid,
    //       email: response.user.email,
    //     }

    //     sessionStorage.setItem('user', JSON.stringify(session))

    //     navigate(`/${PATH.BACKOFFICE.HOME}`)
    //   }
    // } catch (error) {
    //   // eslint-disable-next-line no-console
    //   console.log(error)
    // }
  }

  return (
    <>
      <div id='login-form'>
        <h1>Login</h1>

        <form className='flex flex-col' onSubmit={submitLogin}>
          <label id='username'>Username</label>
          <input id='username' />
          <label id='password'>Password</label>
          <input id='password' />

          <div className='flex'>
            <Button type='submit'>Login</Button>
            <Button link to={`../${PATH.AUTH.FORGOT_PASSWORD}`}>
              Forgot Password
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
