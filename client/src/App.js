
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Header from './components/Navbar';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Header />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;