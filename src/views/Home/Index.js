import React, { Component } from 'react';
import { getAllProducts } from "../../services/ProductsRequestService";

class Index extends Component {

  async componentDidMount() {
    const data = await getAllProducts();
    console.log(data);
  }

  render() {
    return (
      <div>
        <h1>NANI</h1>
      </div>
    );
  }
}

export default Index;
