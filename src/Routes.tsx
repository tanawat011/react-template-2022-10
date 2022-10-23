import type { RenderRoute } from 'helpers/route/renderRoutes'
import type { WithRequired } from 'types/utility'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthenticationContainer } from 'containers/Authentication'
import { BackofficeContainer } from 'containers/Backoffice'
import { ErrorContainer } from 'containers/Error'
import { renderRoutes } from 'helpers/route/renderRoutes'
import { ChangePassword, ForgotPassword, Login } from 'pages/Auth'
import { Error401, Error403, Error404, Error500, Error502, Error503, Error504 } from 'pages/Error'
import { Example } from 'pages/Example'
import { HuesAndCues } from 'pages/Game/HuesAndCues'
import { Home } from 'pages/Home'
import { Todo } from 'pages/Todo/TodoDetail'

type WithChildrenRoute<T> = WithRequired<RenderRoute<T>, 'children'>

type AuthRoutes = WithChildrenRoute<{
  login: RenderRoute
  changePassword: RenderRoute
  forgotPassword: RenderRoute
}>

type BackofficeRoutes = WithChildrenRoute<{
  home: RenderRoute
  todo: RenderRoute
  about: RenderRoute
  game: WithChildrenRoute<{
    huesAndCues: WithChildrenRoute<{
      create: RenderRoute
      roomId: RenderRoute
    }>
  }>
}>

type ErrorRoutes = WithChildrenRoute<{
  e401: RenderRoute
  e403: RenderRoute
  e404: RenderRoute
  e500: RenderRoute
  e502: RenderRoute
  e503: RenderRoute
  e504: RenderRoute
}>

type AllRoutes = {
  auth: AuthRoutes
  backoffice: BackofficeRoutes
  error: ErrorRoutes
}

export const allRoutes: AllRoutes = {
  auth: {
    path: 'auth',
    fullPath: '/auth',
    element: <AuthenticationContainer />,
    children: {
      login: {
        path: 'login',
        fullPath: '/auth/login',
        element: <Login />,
        isIndex: true,
      },
      changePassword: {
        path: 'change-password',
        fullPath: '/auth/change-password',
        element: <ChangePassword />,
      },
      forgotPassword: {
        path: 'forgot-password',
        fullPath: '/auth/forgot-password',
        element: <ForgotPassword />,
      },
    },
  },
  backoffice: {
    path: '/',
    fullPath: '/',
    element: <BackofficeContainer />,
    children: {
      home: {
        path: '',
        fullPath: '/',
        element: <Home />,
        isIndex: true,
      },
      todo: {
        path: 'todo',
        fullPath: '/todo',
        element: <Todo />,
      },
      about: {
        path: 'about',
        fullPath: '/about',
        element: <Example />,
      },
      game: {
        path: 'game',
        fullPath: '/game',
        children: {
          huesAndCues: {
            path: 'hues-and-cues',
            fullPath: '/game/hues-and-cues',
            isIndex: true,
            children: {
              create: {
                path: 'create',
                fullPath: '/game/hues-and-cues/create',
                element: <HuesAndCues />,
              },
              roomId: {
                path: ':roomId',
                fullPath: '/game/hues-and-cues/:roomId',
                element: <HuesAndCues />,
              },
            },
          },
        },
      },
    },
  },
  error: {
    path: '',
    fullPath: '',
    element: <ErrorContainer />,
    children: {
      e401: {
        path: '401',
        fullPath: '/401',
        element: <Error401 />,
      },
      e403: {
        path: '403',
        fullPath: '/403',
        element: <Error403 />,
      },
      e404: {
        path: '404',
        fullPath: '/404',
        element: <Error404 />,
      },
      e500: {
        path: '500',
        fullPath: '/500',
        element: <Error500 />,
      },
      e502: {
        path: '502',
        fullPath: '/502',
        element: <Error502 />,
      },
      e503: {
        path: '503',
        fullPath: '/503',
        element: <Error503 />,
      },
      e504: {
        path: '504',
        fullPath: '/504',
        element: <Error504 />,
      },
    },
  },
}

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(allRoutes)}

        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
