import React, { Component } from 'react';
import swal from 'sweetalert';
import FormProducts from './components/FormProducts';
import ProductContext from './context/products-context';
import { updateProducts } from '../../services/ProductsRequestService';

class Update extends Component {
  // eslint-disable-next-line react/sort-comp, react/static-property-placement
  static contextType = ProductContext;

  updateProducts = async (products = {}) => {
    try {
      this.context.toggleFetching(true);
      await updateProducts(products);
      swal('Sucesso!', 'Produto alterado com sucesso!', 'success').then(() =>
        this.props.history.push('/')
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
            <h5>Alterar Produtos</h5>
            <FormProducts {...{ saveProducts: this.updateProducts }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
