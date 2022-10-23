import { allRoutes } from 'Routes'
import { Button } from 'components/Button'

export const Error503 = () => {
  return (
    <div>
      <p>503 Service Unavailable</p>

      <Button link to={`${allRoutes.backoffice.fullPath}`}>
        Back to Home Page
      </Button>
    </div>
  )
}
