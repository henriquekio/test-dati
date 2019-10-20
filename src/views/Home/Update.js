import React, { Component } from 'react';
import swal from 'sweetalert';
import FormProducts from './components/FormProducts';
import ProductContext from './context/products-context';
import { getProducts, updateProducts } from '../../services/ProductsRequestService';
import ProductsProvider from './context/ProductsProvider';

class Update extends Component {
  // eslint-disable-next-line react/sort-comp, react/static-property-placement
  static contextType = ProductContext;

  constructor(props) {
    super(props);

    this.state = {
      product: {},
      productId: 0
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.setState({ productId: id });
    this.getProduct(id);
  }

  updateProducts = async (products = {}) => {
    try {
      this.context.toggleFetching(true);
      const { id } = products;
      await updateProducts(products, id);
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

  getProduct = async (id = 0) => {
    try {
      this.context.toggleFetching();
      const product = await getProducts(id);
      this.setState({ product });
    } catch (e) {
      swal(
        'Oppss...',
        'Sentimos muito. Houve um problema interno. Por favor tente novamente mais tarde',
        'error'
      ).then(() => this.props.history.push('/'));
    } finally {
      this.context.toggleFetching(false);
    }
  };

  render() {
    const { product, productId } = this.state;
    return (
      <div className="container margin-top-50">
        <div className="row">
          <div className="col s12 l8 offset-l2">
            <h5>Alterar Produtos</h5>
            <ProductsProvider>
              <ProductContext.Consumer>
                {({ fetching }) => (
                  <>
                    {!fetching && (
                      <FormProducts {...{
                        saveProducts: this.updateProducts,
                        product,
                        productId
                      }} />
                    )}
                  </>
                )}
              </ProductContext.Consumer>
            </ProductsProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
