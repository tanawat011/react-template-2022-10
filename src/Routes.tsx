import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthenticationContainer } from 'containers/Authentication'
import { BackofficeContainer } from 'containers/Backoffice'
import { ErrorContainer } from 'containers/Error'
import { ChangePassword, ForgotPassword, Login } from 'features/Authentication'
import {
  Error401,
  Error403,
  Error404,
  Error500,
  Error502,
  Error503,
  Error504,
} from 'features/Error'
import { Example } from 'features/Example'
import { Example2 } from 'features/Example2'
import { Home } from 'features/Home'
import { Todo } from 'features/Todo'

type Path = {
  AUTH: {
    _PATH: string
    LOGIN: string
    CHANGE_PASSWORD: string
    FORGOT_PASSWORD: string
  }
  BACKOFFICE: {
    _PATH: string
    HOME: string
    TODO: string
    ABOUT: string
    ABOUT2: string
  }
  ERROR: {
    _PATH: string
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
    _PATH: 'auth',
    LOGIN: 'login',
    CHANGE_PASSWORD: 'change-password',
    FORGOT_PASSWORD: 'forgot-password',
  },
  BACKOFFICE: {
    _PATH: '/',
    HOME: 'home',
    TODO: 'todo',
    ABOUT: 'about',
    ABOUT2: 'about2',
  },
  ERROR: {
    _PATH: '',
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.AUTH._PATH} element={<AuthenticationContainer />}>
          <Route index element={<Login />} />
          <Route path={PATH.AUTH.LOGIN} element={<Login />} />
          <Route path={PATH.AUTH.CHANGE_PASSWORD} element={<ChangePassword />} />
          <Route path={PATH.AUTH.FORGOT_PASSWORD} element={<ForgotPassword />} />
        </Route>

        <Route path={PATH.BACKOFFICE._PATH} element={<BackofficeContainer />}>
          <Route index element={<Home />} />
          <Route path={PATH.BACKOFFICE.HOME} element={<Home />} />
          <Route path={PATH.BACKOFFICE.TODO} element={<Todo />} />
          <Route path={PATH.BACKOFFICE.ABOUT} element={<Example />} />
          <Route path={PATH.BACKOFFICE.ABOUT2} element={<Example2 />} />
        </Route>

        <Route path={PATH.ERROR._PATH} element={<ErrorContainer />}>
          <Route index element={<Error404 />} />
          <Route path={PATH.ERROR[401]} element={<Error401 />} />
          <Route path={PATH.ERROR[403]} element={<Error403 />} />
          <Route path={PATH.ERROR[404]} element={<Error404 />} />
          <Route path={PATH.ERROR[500]} element={<Error500 />} />
          <Route path={PATH.ERROR[502]} element={<Error502 />} />
          <Route path={PATH.ERROR[503]} element={<Error503 />} />
          <Route path={PATH.ERROR[504]} element={<Error504 />} />
        </Route>

        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
