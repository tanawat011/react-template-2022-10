import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <RecoilRoot>
      <BrowserRouter>{children}</BrowserRouter>
    </RecoilRoot>
  )
}

interface RenderWithProvidersOptions {
  router?: {
    route: string
  }
  recoil?: object
}

export const renderWithProviders = (ui: JSX.Element, option?: RenderWithProvidersOptions) => {
  const routerOption = { ...(option?.router || { route: '/' }) }
  window.history.pushState({}, 'Test page', routerOption.route)

  return {
    ...render(ui, { wrapper: AllTheProviders, ...routerOption }),
  }
}
