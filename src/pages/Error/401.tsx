import { allRoutes } from 'Routes'
import { Button } from 'components/Button'

export const Error401 = () => {
  return (
    <div>
      <p>401 Unauthorized</p>

      <Button link to={allRoutes.auth.fullPath}>
        Back to Login
      </Button>
    </div>
  )
}
