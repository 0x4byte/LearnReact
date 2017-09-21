import React from 'react';
import ProductTable from './ProductTable/';
import SearchBar from './SearchBar';

export default () => {
  return (
    <div>
      <SearchBar />
      <ProductTable />
    </div>
  );
}
