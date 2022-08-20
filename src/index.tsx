import React from 'react'

import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import { setupEnv } from 'configs/env'
import { setupAxios } from 'configs/axios'
import { setupLocales } from 'locales/i18n'

import { AppRoutes } from './Routes'
import reportWebVitals from './reportWebVitals'

import './styles/styles.scss'

setupEnv()
setupLocales()
setupAxios()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
