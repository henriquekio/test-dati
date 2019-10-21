import React, { Component } from 'react';
import swal from 'sweetalert';
import ProductsProvider from './context/ProductsProvider';
import ProductsContext from './context/products-context';
import ListProducts from './components/ListProducts';
import {
  deleteProducts,
  getAllProducts
} from '../../services/ProductsRequestService';

class Index extends Component {
  // eslint-disable-next-line react/sort-comp, react/static-property-placement
  static contextType = ProductsContext;

  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = async () => {
    try {
      const products = await getAllProducts();
      this.setState({ products });
    } catch (e) {
      swal(
        'Opps!',
        'Pedimos desculpas. Estamos passando por instabilidades. Por favor tente novamente mais tarde.',
        'error'
      );
    }
  };

  removeProduct = async (id = 0) => {
    try {
      this.context.toggleFetching();
      await deleteProducts(id);
      await this.getAllProducts();
      swal('Removido com sucesso', '', 'success');
    } catch (e) {
      swal(
        'Opps!',
        'Pedimos desculpas. Estamos passando por instabilidades. Por favor tente novamente mais tarde.',
        'error'
      );
    } finally {
      this.context.toggleFetching(false);
    }
  };

  render() {
    const { products } = this.state;
    return (
      <div className="container margin-top-50">
        <div className="row">
          <div className="col s12">
            <ProductsProvider>
              <ProductsContext.Consumer>
                {({fetching, toggleFetching}) => (
                  <>
                    {!fetching && (
                      <ListProducts
                        {...{
                          products,
                          fetching,
                          removeProduct: this.removeProduct,
                          toggleFetching,
                        }}
                      />
                    )}
                  </>
                )}
              </ProductsContext.Consumer>
            </ProductsProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
