import { useTranslation } from 'react-i18next'

import logo from './logo.svg'

const App = () => {
  const [t, i18n] = useTranslation()

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
        <button onClick={() => i18n.changeLanguage('th')}>Toggle Lang TH</button>
        <button onClick={() => i18n.changeLanguage('en')}>Toggle Lang EN</button>
      </header>
    </div>
  )
}

export default App
