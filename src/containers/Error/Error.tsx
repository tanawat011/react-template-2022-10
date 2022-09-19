import { Outlet } from 'react-router-dom'

export const ErrorContainer: React.FC = () => {
  return (
    <>
      <p>ErrorContainer</p>
      <Outlet />
    </>
  )
}
