import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Success } from '../pages/Success'
import { Checkout } from '../pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success/:id" element={<Success />} />
      </Route>
    </Routes>
  )
}
