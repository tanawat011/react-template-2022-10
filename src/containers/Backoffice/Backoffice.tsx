import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { allRoutes } from 'Routes'
import { Button } from 'components/Button'
import { TwCol, TwRow } from 'components/Common'

const TwContainer = tw(TwRow)`w-full h-screen bg-slate-200`
// const TwSidebar = tw(TwCol)`min-w-[240px] bg-slate-300`
// const TwSidebarHeader = tw(TwRow)`min-h-[64px] bg-slate-400`
// const TwSidebarMenu = tw(TwCol)`h-full bg-slate-500`
const TwFeature = tw(TwCol)`w-full overflow-auto bg-slate-600`
const TwFeatureHeader = tw(TwRow)`justify-between min-h-[64px] bg-slate-700`
const TwFeatureContainer = tw(TwRow)`h-full overflow-x-auto bg-slate-800 relative`

export const BackofficeContainer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { auth, backoffice } = allRoutes
  const { home } = backoffice.children

  // const { auth, backoffice, error } = allRoutes
  // const { e401, e403, e404, e500, e502, e503, e504 } = error.children
  // const { about, game, home, todo } = backoffice.children
  // const { huesAndCues } = game.children
  // const { create: huesAndCuesCreate } = huesAndCues.children

  useEffect(() => {
    handleRedirectToHome()
  }, [])

  const handleRedirectToHome = () => {
    const defaultPaths = ['', '/']

    if (defaultPaths.includes(location.pathname)) {
      navigate(home.fullPath)
    }
  }

  return (
    <TwContainer>
      {/* <TwSidebar>
        <TwSidebarHeader>Sidebar Header</TwSidebarHeader>

        <TwSidebarMenu>
          <Button link to={home.fullPath}>
            Home
          </Button>
          <Button link to={todo.fullPath}>
            Todo
          </Button>
          <Button link to={about.fullPath}>
            About
          </Button>
          <Button link to={huesAndCuesCreate.fullPath}>
            Game
          </Button>

          <h1>Error Stage</h1>

          <Button link to={e401.fullPath}>
            Error 401
          </Button>
          <Button link to={e403.fullPath}>
            Error 403
          </Button>
          <Button link to={e404.fullPath}>
            Error 404
          </Button>
          <Button link to={e500.fullPath}>
            Error 500
          </Button>
          <Button link to={e502.fullPath}>
            Error 502
          </Button>
          <Button link to={e503.fullPath}>
            Error 503
          </Button>
          <Button link to={e504.fullPath}>
            Error 504
          </Button>
        </TwSidebarMenu>
      </TwSidebar> */}

      <TwFeature>
        <TwFeatureHeader>
          <p>Container Header</p>

          <Button link to={auth.fullPath}>
            Logout
          </Button>
        </TwFeatureHeader>

        <TwFeatureContainer>
          <Outlet />
        </TwFeatureContainer>
      </TwFeature>
    </TwContainer>
  )
}
