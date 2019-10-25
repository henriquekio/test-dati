import React, { Component } from 'react';
import swal from 'sweetalert';
import FormProducts from './components/FormProducts';
import ProductContext from './context/products-context';
import { createProducts } from '../../services/ProductsRequestService';

class Create extends Component {
  // eslint-disable-next-line react/sort-comp, react/static-property-placement
  static contextType = ProductContext;

  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };
  }

  createProducts = async (products = {}) => {
    try {
      this.context.toggleFetching(true);
      await createProducts(products);
      swal('Sucesso!', 'Produto cadastrado com sucesso!', 'success').then(() =>
        this.props.history.push('/')
      );
    } catch (e) {
      const { response } = e;
      if (response.status === 422) {
        const {
          data: { errors }
        } = response;
        this.setState({ errors });
      }
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
    const { errors } = this.state;

    return (
      <div className="container margin-top-50">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <h5>Cadastro de Produtos</h5>
            <FormProducts {...{ saveProducts: this.createProducts, errors }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
