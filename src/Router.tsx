import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home/intro'
import DefaultLayout from './Layout/DefaultLayout'
import Payament from './pages/Payment'
import ConfirmOrder from './pages/ConfirmOrder';

export function Router() {
  return (
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/payamentPage" element={<Payament />} />
            <Route path="/confirmOrder" element={<ConfirmOrder />} />
        </Route>
      </Routes>

  );
}
