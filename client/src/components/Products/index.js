import React from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      };
  
      fetchProducts();
    }, []);
  
    return (
      <div className="products">
        <h1>Products</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <Link to={`/products/${product._id}`} className="btn">View</Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Products;