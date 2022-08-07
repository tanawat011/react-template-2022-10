import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'

import logo from '../../logo.svg'

import { Button } from 'components/Button'

export const Example = () => {
  const [t, i18n] = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const doSubmit = () => {
    // console.log(data)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='bg-red-700'>
          {t('common:edit')} <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Button onClick={() => i18n.changeLanguage('th')}>Toggle Lang TH</Button>
        <Button onClick={() => i18n.changeLanguage('en')}>Toggle Lang EN</Button>

        <form onSubmit={handleSubmit(doSubmit)}>
          <div>
            <label>Name</label>
            <input {...register('name')} defaultValue='' />
          </div>
          <div>
            <label>Age</label>
            <input {...register('age', { required: true })} defaultValue='' />
          </div>
          <div style={{ color: 'red' }}>{errors?.age && 'input is required'}</div>
          <Button type='submit' color='primary' label='Submit' />
        </form>
      </header>
    </div>
  )
}
