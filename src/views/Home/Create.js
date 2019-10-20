import React, { Component } from 'react';
import FormProducts from './components/FormProducts';
import ProductsProvider from './context/ProductsProvider';
import ProductsContext from './context/products-context';

class Create extends Component {
  render() {
    return (
      <div className="container margin-top-50">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <h5>Cadastro de Produtos</h5>
            <ProductsProvider>
              <ProductsContext.Consumer>
                {({ createProducts }) => (
                  <FormProducts {...{ saveProducts: createProducts }}/>
                )}
              </ProductsContext.Consumer>
            </ProductsProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;