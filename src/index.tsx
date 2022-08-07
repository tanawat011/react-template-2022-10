import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'

import { Example } from './containers/Example'
import reportWebVitals from './reportWebVitals'

import { setupEnv } from 'configs/env'
import { setupLocales } from 'locales/i18n'

import './styles/styles.scss'

setupEnv()
setupLocales()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Example />
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
