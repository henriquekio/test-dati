import React, { Component } from 'react';
import swal from 'sweetalert';
import MainContent from "../../components/MainContent";
import ProductsProvider from "./context/ProductsProvider";
import ProductsContext from './context/products-context'
import ListProducts from "./components/ListProducts";
import { getAllProducts } from "../../services/ProductsRequestService";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = async () => {
    try {
      const products = await getAllProducts();
      this.setState({ products });
    } catch (e) {
      swal('Opps!', 'Pedimos desculpas. Estamos passando por instabilidades. Por favor tente novamente mais tarde.', 'error');
    }
  };

  render() {
    const { products } = this.state;
    return (
      <MainContent>
        <div className="container margin-top-50">
          <div className="row">
            <div className="col s12">
              <ProductsProvider>
                <ProductsContext.Consumer>
                  {(toggleFetching, fetching) => (
                    <>
                      {!fetching && (<ListProducts {...{ products, fetching }} />)}
                    </>
                  )}
                </ProductsContext.Consumer>
              </ProductsProvider>
            </div>
          </div>
        </div>
      </MainContent>
    );
  }
}

export default Index;
