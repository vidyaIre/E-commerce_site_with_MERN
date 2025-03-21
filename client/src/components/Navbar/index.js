import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const cart = useSelector((state) => state.cart.cartItems);
    return (
        <nav className="navbar">
          <Link to="/" className="logo">E-Shop</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link className="nav-link" to="/cart">Cart ({cart.length})</Link>
          <Link className="nav-link" to="/login">Login</Link>
          </div>
        </nav>
      );
}

export default Navbar;