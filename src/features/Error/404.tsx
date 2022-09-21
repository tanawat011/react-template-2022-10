import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'

export const Error404 = () => {
  const navigate = useNavigate()

  return (
    <div>
      <p>404 Not Found</p>

      <Button onClick={() => navigate(-1)}>Back to Previous Page</Button>
    </div>
  )
}
