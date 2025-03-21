import React from 'react'

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    return (
      <div className="cart">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/products">Shop now</Link></p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default Cart;