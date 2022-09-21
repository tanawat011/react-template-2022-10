import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Error503 = () => {
  return (
    <div>
      <p>503 Service Unavailable</p>

      <Button link to={`${PATH.BACKOFFICE.ROOT}`}>
        Back to Home Page
      </Button>
    </div>
  )
}
