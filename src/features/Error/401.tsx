import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Error401 = () => {
  return (
    <div>
      <p>401 Unauthorized</p>

      <Button link to={`/${PATH.AUTH.ROOT}`}>
        Back to Login
      </Button>
    </div>
  )
}
