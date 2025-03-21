import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to E-Shop</h1>
      <p>Find the best products at amazing prices!</p>
      <Link to="/products" className="btn">Shop Now</Link>
    </div>
  )
}

export default Home;