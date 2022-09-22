import { PATH } from 'Routes'
import { Button } from 'components/Button'

export const Error403 = () => {
  return (
    <div>
      <p>403 Forbidden</p>

      <Button link to={`/${PATH.AUTH.ROOT}`}>
        Back to Login
      </Button>
    </div>
  )
}
