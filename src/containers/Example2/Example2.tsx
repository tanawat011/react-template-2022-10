import type { Example } from 'recoils/example'

import { useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { Button } from 'components/Button'
import { exampleState } from 'recoils/example'
import { fetchApi } from 'helpers/fetch'

import logo from '../../logo.svg'

export const Example2 = () => {
  const [t, i18n] = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Example>()
  const [recoilState, setRecoilState] = useRecoilState(exampleState)

  const [, setUsers] = useState([])

  const doSubmit = (data: Example) => {
    setRecoilState(data)
  }

  const fetchUsers = async () => {
    const { data } = await fetchApi({
      method: 'get',
      path: '/users',
    })

    setUsers(data as [])
  }

  useEffect(() => {
    fetchUsers()
  }, [])

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
          learn react
        </a>
        <Link to='/'>Home</Link>
        <Button onClick={() => i18n.changeLanguage('th')}>Toggle Lang TH</Button>
        <Button onClick={() => i18n.changeLanguage('en')}>Toggle Lang EN</Button>

        <code>
          <>{JSON.stringify(recoilState)}</>
        </code>

        <form onSubmit={handleSubmit(doSubmit)}>
          <div>
            <label>Name</label>
            <input {...register('name')} data-testid='name' defaultValue='' />
          </div>
          <div>
            <label>Age</label>
            <input {...register('age', { required: true })} data-testid='age' defaultValue='' />
          </div>
          <div style={{ color: 'red' }}>{errors?.age && 'input is required'}</div>
          <Button type='submit' color='primary' label='Submit' />
        </form>
      </header>
    </div>
  )
}
