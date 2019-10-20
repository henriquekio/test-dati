import React from 'react';
import { numberFormat } from '../../../helpers/helpers';


const ListProducts = (props) => {
  const { products } = props;
  return (
    <ul className="list-products browser-default">
      {
        products.map(product => (
          <li className="list-products__item" key={product.id}>
            <p>
              {product.short_description}
              <br/>
              <span className="grey-text lighten-3">{numberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }, product.value)}</span>
            </p>
            <ul className="list-products__actions">
              <li>
                <button type="button">
                  <i className="material-icons blue-text">add</i>
                </button>
              </li>
              <li>
                <button type="button">
                  <i className="material-icons red-text">delete</i>
                </button>
              </li>
              <li>
                <button type="button">
                  <i className="material-icons green-text">create</i>
                </button>
              </li>
            </ul>
          </li>
        ))
      }
    </ul>
  );
};

export default ListProducts;