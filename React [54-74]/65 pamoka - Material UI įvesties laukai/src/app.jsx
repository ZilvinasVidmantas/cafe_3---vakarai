import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar } from './components';
import HomePage from './pages/home-page';
import CupShelfPage from './pages/cup-shelf-page';
import PotteryPage from './pages/pottery-page';
import CartPage from './pages/cart-page';
import OrderPage from './pages/order-page';
import ErrorPage from './pages/error-page';

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cup-shelf" element={<CupShelfPage />} />
      <Route path="/pottery" element={<PotteryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
