import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar';
import CupShelfPage from './pages/cup-shelf-page';
import ErrorPage from './pages/error-page';
import HomePage from './pages/home-page';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/cup-shelf" element={<CupShelfPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
