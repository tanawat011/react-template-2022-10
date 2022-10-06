import { useEffect } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import tw from 'twin.macro'

import { PATH } from 'Routes'
import { Button } from 'components/Button'
import { TwCol, TwRow } from 'components/Common'

const TwContainer = tw(TwRow)`w-full h-screen bg-slate-200`
const TwSidebar = tw(TwCol)`min-w-[280px] bg-slate-300`
const TwSidebarHeader = tw(TwRow)`min-h-[64px] bg-slate-400`
const TwSidebarMenu = tw(TwCol)`h-full bg-slate-500`
const TwFeature = tw(TwCol)`w-full overflow-auto bg-slate-600`
const TwFeatureHeader = tw(TwRow)`justify-between min-h-[64px] bg-slate-700`
const TwFeatureContainer = tw(TwRow)`h-full overflow-x-auto bg-slate-800`

export const BackofficeContainer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const homePath = `../${PATH.BACKOFFICE.HOME}`

  useEffect(() => {
    handleRedirectToHome()
  }, [])

  const handleRedirectToHome = () => {
    const defaultPaths = ['', '/']

    if (defaultPaths.includes(location.pathname)) {
      navigate(homePath)
    }
  }

  return (
    <TwContainer>
      <TwSidebar>
        <TwSidebarHeader>Sidebar Header</TwSidebarHeader>

        <TwSidebarMenu>
          <Button link to={homePath}>
            Home
          </Button>
          <Button link to={`../${PATH.BACKOFFICE.TODO}`}>
            Todo
          </Button>
          <Button link to={`../${PATH.BACKOFFICE.ABOUT}`}>
            About
          </Button>
          <Button link to={`../${PATH.BACKOFFICE.GAME}`}>
            Game
          </Button>
          <Button link to={`../${PATH.BACKOFFICE.READ_CSV}`}>
            Read CSV
          </Button>

          <h1>Error Stage</h1>

          <Button link to={`/${PATH.ERROR[401]}`}>
            Error 401
          </Button>
          <Button link to={`/${PATH.ERROR[403]}`}>
            Error 403
          </Button>
          <Button link to={`/${PATH.ERROR[404]}`}>
            Error 404
          </Button>
          <Button link to={`/${PATH.ERROR[500]}`}>
            Error 500
          </Button>
          <Button link to={`/${PATH.ERROR[502]}`}>
            Error 502
          </Button>
          <Button link to={`/${PATH.ERROR[503]}`}>
            Error 503
          </Button>
          <Button link to={`/${PATH.ERROR[504]}`}>
            Error 504
          </Button>
        </TwSidebarMenu>
      </TwSidebar>

      <TwFeature>
        <TwFeatureHeader>
          <p>Container Header</p>

          <Button link to={`/${PATH.AUTH.ROOT}`}>
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
