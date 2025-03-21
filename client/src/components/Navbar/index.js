import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
          <Link to="/" className="logo">E-Shop</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </nav>
      );
}

export default Navbar;