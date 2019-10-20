import React, { Component } from 'react';
import swal from 'sweetalert';
import FormProducts from './components/FormProducts';
import ProductContext from './context/products-context';
import { createProducts } from '../../services/ProductsRequestService';

class Create extends Component {
  // eslint-disable-next-line react/sort-comp, react/static-property-placement
  static contextType = ProductContext;

  createProducts = async (products = {}) => {
    try {
      this.context.toggleFetching(true);
      await createProducts(products);
      swal('Sucesso!', 'Produto cadastrado com sucesso!', 'success').then(() =>
        this.props.history.push('/contratos')
      );
    } catch (e) {
      swal(
        'Oppss...',
        'Sentimos muito. Houve um problema interno. Por favor tente novamente mais tarde',
        'error'
      );
    } finally {
      this.context.toggleFetching(false);
    }
  };

  render() {
    return (
      <div className="container margin-top-50">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <h5>Cadastro de Produtos</h5>
            <FormProducts {...{ saveProducts: this.createProducts }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
