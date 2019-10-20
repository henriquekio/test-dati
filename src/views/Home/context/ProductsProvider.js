import React, { Component } from 'react';
import ProductsContext from './products-context';

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

  render() {
    const { fetching } = this.state;
    return (
      <ProductsContext.Provider value={{
        fetching,
        toggleFetching: this.toggleFetching,
      }}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

export default ProductsProvider;