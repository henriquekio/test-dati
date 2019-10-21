import React, { useState } from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { numberFormat } from '../../../helpers/helpers';
import ProductDetails from './ProductDetails';
import { updateProducts } from '../../../services/ProductsRequestService';

const ListProducts = props => {
  const { products } = props;

  const [detail, setDetail] = useState('');

  const deleteProduct = (product = {}) => {
    const { description, id } = product;
    swal({
      title: 'Deseja realmente remover esse produto?',
      text: description,
      icon: 'warning',
      buttons: {
        cancel: {
          text: 'Não',
          visible: true
        },
        confirm: {
          text: 'Sim',
          visible: true
        }
      }
    }).then(value => {
      if (value) {
        props.removeProduct(id);
      }
    });
  };

  const toggleDetails = (id = 0) => {
    if (detail === id) {
      setDetail('');
    } else {
      setDetail(id);
    }
  };

  const changeStatus = async (product = {}) => {
    try {
      // eslint-disable-next-line no-param-reassign
      const status = product.status === 'enable' ? 'disable' : 'enable';
      props.toggleFetching();
      await updateProducts({ status }, product.id);
      await props.getAllProducts();
    } finally {
      props.toggleFetching(false);
    }
  };

  return (
    <ul className="list-products browser-default">
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <li
            id={index === 0 ? 'first-item' : ''}
            className={`list-products__item ${
              product.status === 'disable' ? 'disable' : ''
            }`}
          >
            <p>
              {product.short_description}
              <br />
              <span className="grey-text lighten-3">
                {numberFormat(
                  'pt-BR',
                  {
                    style: 'currency',
                    currency: 'BRL'
                  },
                  product.value
                )}
              </span>
            </p>
            <ul className="list-products__actions">
              <li>
                <button onClick={() => toggleDetails(index)} type="button">
                  <i className="material-icons blue-text">add</i>
                </button>
              </li>
              <li>
                <button onClick={() => deleteProduct(product)} type="button">
                  <i className="material-icons red-text">delete</i>
                </button>
              </li>
              <li>
                <Link to={`/produtos/${product.id}`}>
                  <i className="material-icons green-text">create</i>
                </Link>
              </li>
              <li>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div className="switch" onClick={() => changeStatus(product)}>
                  <label>
                    Inativo
                    <input
                      defaultChecked={product.status === 'enable'}
                      type="checkbox"
                    />
                    <span className="lever" />
                    Ativo
                  </label>
                </div>
              </li>
            </ul>
          </li>
          {detail === index && <ProductDetails {...{ product }} />}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ListProducts;
