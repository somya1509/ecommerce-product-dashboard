import React from 'react';
import { ProductProvider } from '../context/product.provider';
import ProductListContainer from '../ProductDetails/ProductList';
import FilterBar from '../Filter/Filter';
import SortDropdown from '../Filter/SortDropdown';
import './Dashboard.scss';

const Dashboard: React.FC = () => (
  <ProductProvider>
    <div className="dashboard">
      <div className='filter'>
        <FilterBar />
        <SortDropdown />
      </div>
        <ProductListContainer />
    </div>
  </ProductProvider>
);

export default Dashboard;
