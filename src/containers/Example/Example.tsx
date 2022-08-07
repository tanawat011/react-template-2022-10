import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { exampleState } from 'recoils/example'

import logo from '../../logo.svg'

export const Example = () => {
  const [recoilState] = useRecoilState(exampleState)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='bg-red-700'>
          Edit <code>src/container/Example.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          learn react
        </a>
        <Link to='/about'>About</Link>

        <code style={{ background: 'green' }}>
          <>{JSON.stringify(recoilState)}</>
        </code>
      </header>
    </div>
  )
}
