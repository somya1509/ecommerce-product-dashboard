import React, { useContext } from 'react';
import { ProductContext } from '../context/product.context';
import { ContextState, FilterOptions } from '../types';
import './Filter.scss';

const FilterBar: React.FC = () => {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error('FilterBar must be used within a ProductProvider');
  }

  const { filters, setFilters } = productContext as ContextState;

  const handleFilterChange = (updatedFilters: Partial<FilterOptions>) => {
    setFilters({ ...filters, ...updatedFilters });
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          onChange={(e) => handleFilterChange({ category: e.target.value })}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price-range">Price Range:</label>
        <input
          type="number"
          placeholder="Min"
          onBlur={(e) =>
            handleFilterChange({
              priceRange: [Number(e.target.value), filters.priceRange?.[1] || 0],
            })
          }
        />
        <input
          type="number"
          placeholder="Max"
          onBlur={(e) =>
            handleFilterChange({
              priceRange: [filters.priceRange?.[0] || 0, Number(e.target.value)],
            })
          }
        />
      </div>
    </div>
  );
};

export default FilterBar;
