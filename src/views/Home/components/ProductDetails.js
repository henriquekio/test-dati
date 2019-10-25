import React from 'react';

const ProductDetails = (props) => {
  const { product } = props;
  return (
    <li className="list-products__item detail">
      <table>
        <tbody>
        <tr>
          <th>Descrição</th>
          <td>{product.description}</td>
        </tr>
        <tr>
          <th>Quantidade</th>
          <td>{product.qty}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{product.status === 'enable' ? 'Ativo' : "Inativo"}</td>
        </tr>
        </tbody>
      </table>
    </li>
  );
};

export default ProductDetails;
