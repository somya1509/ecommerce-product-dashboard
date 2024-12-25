import React from 'react';
import { Product } from '../types';
import './ProductCard.scss'
import ProductDetailsModal from '../ProductDetails/Modal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="product-card" onClick={handleOpenModal}>
        <img className="product-image" src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>

      {isModalOpen && (
        <ProductDetailsModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          product={product}
        />
      )}
    </>
  );
};

export default ProductCard;
