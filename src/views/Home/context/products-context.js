import React from 'react';

export default React.createContext({
  fetching: false,
  products: '',
  toggleFetching: () => {},
  createProducts: () => {},
});