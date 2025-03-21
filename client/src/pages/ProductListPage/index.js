import React from 'react';
import ProductCard from '../../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions';
import { useEffect } from 'react';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
const ProductListPage = () => {
    return (
        <div>ProductListPage

            <div className="container mt-5">
                <div className="row">
                    {products.map((product) => (
                        <div key={product._id} className="col-md-4">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
}

export default ProductListPage;