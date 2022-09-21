import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Error504 = () => {
  return (
    <div>
      <p>504 Gateway Timeout</p>

      <Button link to={`${PATH.BACKOFFICE.ROOT}`}>
        Back to Home Page
      </Button>
    </div>
  )
}
