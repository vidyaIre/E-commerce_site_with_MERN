import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartAction';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <h2>Your cart is empty. <Link to="/">Go back</Link></h2>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.product} className="row mb-3">
              <div className="col-md-4">
                <img src={item.image} alt={item.name} className="img-fluid" />
              </div>
              <div className="col-md-4">
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                <p>${item.price}</p>
              </div>
              <div className="col-md-4">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCartHandler(item.product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
