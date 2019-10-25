import React, { Component } from 'react';
import NavbarDefault from './NavbarDefault';
import Loader from './Loader';
import ProductsContext from '../views/Home/context/products-context';

class MainContent extends Component {
  // eslint-disable-next-line react/sort-comp,react/static-property-placement
  static contextType = ProductsContext;

  constructor(props) {
    super(props);

    this.state = {
      fetching: true
    };
  }

  componentDidMount() {
    const { fetching } = this.state;
    if (fetching && !this.context.fetching) {
      setTimeout(() => {
        this.setState({ fetching: false });
      }, 3000);
    }
  }


  render() {
    const { fetching } = this.state;
    return (
      <>
        <NavbarDefault/>
        <main>
          {/*{fetching && <Loader/>}*/}
          {this.props.children}
        </main>
      </>
    );
  }
}

export default MainContent;
