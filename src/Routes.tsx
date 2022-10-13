import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthenticationContainer } from 'containers/Authentication'
import { BackofficeContainer } from 'containers/Backoffice'
import { ErrorContainer } from 'containers/Error'
import { ChangePassword, ForgotPassword, Login } from 'pages/Authentication'
import { Error401, Error403, Error404, Error500, Error502, Error503, Error504 } from 'pages/Error'
import { Example } from 'pages/Example'
import { HuesAndCues } from 'pages/Game/HuesAndCues'
import { Home } from 'pages/Home'
import { ReadCsv } from 'pages/ReadCsv'
import { Todo } from 'pages/Todo/TodoDetail'

type Path = {
  AUTH: {
    ROOT: string
    LOGIN: string
    CHANGE_PASSWORD: string
    FORGOT_PASSWORD: string
  }
  BACKOFFICE: {
    ROOT: string
    HOME: string
    TODO: string
    ABOUT: string
    GAME: {
      ROOT: string
      HUES_AND_CUES: {
        ROOT: string
        SET_DISPLAY_NAME: string
        SETUP_ROOM: string
      }
    }
    READ_CSV: string
  }
  ERROR: {
    ROOT: string
    401: string
    403: string
    404: string
    500: string
    502: string
    503: string
    504: string
  }
}

export const PATH: Path = {
  AUTH: {
    ROOT: 'auth',
    LOGIN: 'login',
    CHANGE_PASSWORD: 'change-password',
    FORGOT_PASSWORD: 'forgot-password',
  },
  BACKOFFICE: {
    ROOT: '/',
    HOME: 'home',
    TODO: 'todo',
    ABOUT: 'about',
    GAME: {
      ROOT: 'game',
      HUES_AND_CUES: {
        ROOT: 'hues-and-cues',
        SET_DISPLAY_NAME: 'set-display-name',
        SETUP_ROOM: 'setup-room',
      },
    },
    READ_CSV: 'read-csv',
  },
  ERROR: {
    ROOT: '',
    401: '401',
    403: '403',
    404: '404',
    500: '500',
    502: '502',
    503: '503',
    504: '504',
  },
}

export const AppRoutes = () => {
  const { AUTH, BACKOFFICE, ERROR } = PATH
  const { ROOT: GAME, HUES_AND_CUES } = BACKOFFICE.GAME

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AUTH.ROOT} element={<AuthenticationContainer />}>
          <Route index element={<Login />} />
          <Route path={AUTH.LOGIN} element={<Login />} />
          <Route path={AUTH.CHANGE_PASSWORD} element={<ChangePassword />} />
          <Route path={AUTH.FORGOT_PASSWORD} element={<ForgotPassword />} />
        </Route>

        <Route path={BACKOFFICE.ROOT} element={<BackofficeContainer />}>
          <Route index element={<Home />} />
          <Route path={BACKOFFICE.HOME} element={<Home />} />
          <Route path={BACKOFFICE.TODO} element={<Todo />} />
          <Route path={BACKOFFICE.ABOUT} element={<Example />} />
          <Route path={GAME}>
            <Route path={HUES_AND_CUES.ROOT}>
              <Route path={':roomId'} element={<HuesAndCues />} />
            </Route>
          </Route>
          <Route path={BACKOFFICE.READ_CSV} element={<ReadCsv />} />
        </Route>

        <Route path={ERROR.ROOT} element={<ErrorContainer />}>
          <Route index element={<Error404 />} />
          <Route path={ERROR[401]} element={<Error401 />} />
          <Route path={ERROR[403]} element={<Error403 />} />
          <Route path={ERROR[404]} element={<Error404 />} />
          <Route path={ERROR[500]} element={<Error500 />} />
          <Route path={ERROR[502]} element={<Error502 />} />
          <Route path={ERROR[503]} element={<Error503 />} />
          <Route path={ERROR[504]} element={<Error504 />} />
        </Route>

        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
