import React from 'react';
import Modal from 'react-modal';
import { Product } from '../types';
import './Modal.scss';

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onRequestClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, isOpen, onRequestClose }) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='modal-container'>
      {product ? (
        <div>
          <button className='top-right' onClick={onRequestClose}>x</button>
          <img src={product.image} alt={product.title} />
          <h6 className='category'>{product.category.toUpperCase()}</h6>
          <div className='title-container'>
          <h2>{product.title}</h2>
          <p className='price'>${product.price.toFixed(2)}</p>
          </div>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Modal>
  );
};

export default ProductDetailsModal;
