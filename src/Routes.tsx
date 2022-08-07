import { Routes, Route } from 'react-router-dom'

import { Example } from './containers/Example'
import { Example2 } from './containers/Example2'

export const AppRoutes = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Example />} />
        <Route path='/about' element={<Example2 />} />
      </Routes>
    </div>
  )
}
