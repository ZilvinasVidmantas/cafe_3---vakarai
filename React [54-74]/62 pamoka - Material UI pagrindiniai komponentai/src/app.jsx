import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar';
import CartPage from './pages/cart-page';
import CupShelfPage from './pages/cup-shelf-page';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';
import PotteryPage from './pages/pottery-page';

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cup-shelf" element={<CupShelfPage />} />
      <Route path="/pottery" element={<PotteryPage />} />
      <Route path="/cart" element={<CartPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);


export default App;
