import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Error500 = () => {
  return (
    <div>
      <p>500 Internal Server Error</p>

      <Button link to={`${PATH.BACKOFFICE.ROOT}`}>
        Back to Home Page
      </Button>
    </div>
  )
}
