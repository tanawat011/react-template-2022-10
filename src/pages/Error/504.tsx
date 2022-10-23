import { allRoutes } from 'Routes'
import { Button } from 'components/Button'

export const Error504 = () => {
  return (
    <div>
      <p>504 Gateway Timeout</p>

      <Button link to={`${allRoutes.backoffice.fullPath}`}>
        Back to Home Page
      </Button>
    </div>
  )
}
