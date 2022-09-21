import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Error502 = () => {
  return (
    <div>
      <p>502 Bed Gateway</p>

      <Button link to={`${PATH.BACKOFFICE.ROOT}`}>
        Back to Home Page
      </Button>
    </div>
  )
}
