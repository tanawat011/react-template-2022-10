import { allRoutes } from 'Routes'
import { Button } from 'components/Button'

export const Error500 = () => {
  return (
    <div>
      <p>500 Internal Server Error</p>

      <Button link to={`${allRoutes.backoffice.fullPath}`}>
        Back to Home Page
      </Button>
    </div>
  )
}
