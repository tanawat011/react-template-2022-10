import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Example } from './containers/Example'
import { Example2 } from './containers/Example2'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Example />} />
        <Route path='/about' element={<Example2 />} />
      </Routes>
    </BrowserRouter>
  )
}
