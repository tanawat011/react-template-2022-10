import { Link } from 'react-router-dom'

import logo from '../../logo.svg'

export const Example = () => {
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
          Example
        </a>
        <Link to='/about'>About</Link>
      </header>
    </div>
  )
}
