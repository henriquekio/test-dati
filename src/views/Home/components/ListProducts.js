import React from 'react';
import swal from 'sweetalert';
import { numberFormat } from '../../../helpers/helpers';
import { Link } from 'react-router-dom';


const ListProducts = (props) => {
  const { products } = props;

  console.log(props);

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
                <button onClick={() => deleteProduct(product)} type="button">
                  <i className="material-icons red-text">delete</i>
                </button>
              </li>
              <li>
                <Link to={`/produtos/${product.id}`}>
                  <i className="material-icons green-text">create</i>
                </Link>
              </li>
            </ul>
          </li>
        ))
      }
    </ul>
  );
};

export default ListProducts;