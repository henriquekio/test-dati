import React, { Component } from 'react';
import swal from 'sweetalert';
import ProductsProvider from './context/ProductsProvider';
import ProductsContext from './context/products-context';
import ListProducts from './components/ListProducts';
import { deleteProducts, getAllProducts, updateProducts } from '../../services/ProductsRequestService';

class Index extends Component {
  // eslint-disable-next-line react/sort-comp, react/static-property-placement
  static contextType = ProductsContext;

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filteredProducts: [],
      filter: 'description'
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = async () => {
    try {
      this.context.toggleFetching();
      const products = await getAllProducts();
      this.setState({ products, filteredProducts: products });
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

  onChangeFilter = ({ target }) => {
    const { products, filter } = this.state;
    const filteredProducts = products.filter(
      value =>
        value[filter].toLowerCase().indexOf(target.value.toLowerCase()) > -1
    );
    this.setState({ filteredProducts });
  };

  onChangeOption = ({ target }) => {
    this.setState({ filter: target.value });
  };

  changeStatusProduct = async (product = {}) => {
    try {
      const status = product.status === 'enable' ? 'disable' : 'enable';
      const productAltered = await updateProducts({ status }, product.id);
      this.setState(state => {
        const filteredProducts = state.filteredProducts.map(item => {
          if (item.id === productAltered.id) {
            return productAltered;
          }

          return item;
        });
        return { filteredProducts };
      });
    } catch (e) {

    }
  };

  render() {
    const { filteredProducts } = this.state;
    return (
      <div className="container margin-top-50">
        <div className="row">
          <div className="col s12">
            <form className="form-default">
              <div className="row">
                <div className="input-field col s12 l8">
                  <label htmlFor="palavra">Palavra Chave</label>
                  <input
                    onChange={this.onChangeFilter}
                    type="text"
                    id="palavra"
                    className="browser-default"
                    name="palavra"
                  />
                </div>
                <div className="input-field col s12 l4">
                  <label htmlFor="field" className="active">
                    Filtro
                  </label>
                  <select onChange={this.onChangeOption}>
                    <option value="description">Descrição</option>
                    <option value="short_description">Breve Descrição</option>
                    <option value="code">Código</option>
                  </select>
                </div>
              </div>
            </form>
            <ProductsProvider>
              <ProductsContext.Consumer>
                {({ fetching, toggleFetching }) => (
                  <>
                    {!fetching && (
                      <ListProducts
                        {...{
                          products: filteredProducts,
                          fetching,
                          removeProduct: this.removeProduct,
                          toggleFetching,
                          getAllProducts: this.getAllProducts,
                          changeStatusProduct: this.changeStatusProduct
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
