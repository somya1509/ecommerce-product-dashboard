import React, { useContext } from 'react';
import { ProductContext } from '../context/product.context';
import { ContextState } from '../types';
import './SortDropdown.scss' 

const SortDropdown: React.FC = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error('SortDropdown must be used within a ProductProvider');
  }

  const { setFilters, filters } = productContext as ContextState;

  const handleSortChange = (sortOption: string) => {
    setFilters({ ...filters, sort: sortOption });
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={(e) => handleSortChange(e.target.value)}>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
