import React, { useContext } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { ContextState } from '../types';
import { ProductContext } from '../context/product.context';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss'

const ProductListContainer: React.FC = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error('ProductListContainer must be used within a ProductProvider');
  }

  const { products, isLoading, fetchMoreProducts } = productContext as ContextState;

  const { ref } = useInfiniteScroll(fetchMoreProducts);

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div ref={ref} className="loading-indicator">
        {isLoading && <p>Loading more products...</p>}
      </div>
    </div>
  );
};

export default ProductListContainer;
