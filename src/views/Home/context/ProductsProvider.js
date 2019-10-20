import React, { Component } from 'react';
import ProductsContext from './products-context';
import { createProducts } from '../../../services/ProductsRequestService';

class ProductsProvider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fetching: false
    };
  }

  toggleFetching = (fetching = true) => {
    this.setState({ fetching });
  };

  createProducts = async (products = {}) => {
    try {
      this.toggleFetching(true);
      return await createProducts(products);
    } finally {
      this.toggleFetching(false);
    }
  };

  render() {
    const { fetching } = this.state;
    return (
      <ProductsContext.Provider value={{
        fetching,
        toggleFetching: this.toggleFetching,
        createProducts: this.createProducts
      }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

export default ProductsProvider;