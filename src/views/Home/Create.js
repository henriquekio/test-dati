import React, { Component } from 'react';
import FormProducts from './components/FormProducts';

class Create extends Component {
  render() {
    return (
      <div className="container margin-top-50">
        <div className="row">
          <div className="col s12">
            <h5>Cadastro de Produtos</h5>
            <div className="row">
              <div className="col s12 l6 offset-l3">
                <FormProducts/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;