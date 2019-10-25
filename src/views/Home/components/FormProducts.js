/* eslint-disable camelcase, no-prototype-builtins */
import React, { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input';
import { Link } from 'react-router-dom';
import ValidateMessage from '../../../components/ValidateMessage';

const FormProducts = props => {
  const [id, setId] = useState(0);
  const [description, setDescription] = useState('');
  const [short_description, setShort_description] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('enable');
  const [qty, setQty] = useState(0);
  const [value, setValue] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const { product, productId, errors } = props;
    setErrors(errors);
    if (productId > 0 && product.id) {
      setId(product.id);
      setDescription(product.description);
      setShort_description(product.short_description);
      setCode(product.code);
      setStatus(product.status);
      setQty(product.qty);
      setValue(parseFloat(product.value));
    }
  }, [props]);

  const submitForm = event => {
    event.preventDefault();
    const product = {
      id,
      description,
      short_description,
      code,
      status,
      qty,
      value
    };

    props.saveProducts(product);
  };

  const onFocusInput = event => {
    if (errors.hasOwnProperty(event.target.name)) {
      const newErrors = errors;
      delete newErrors[event.target.name];
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={submitForm} className="card-panel rounded form-default">
      <div className="row">
        <div className="input-field col s12">
          <label
            htmlFor="description"
            className={description.length > 0 ? 'active' : ''}
          >
            Descrição Completa
          </label>
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            onFocus={onFocusInput}
            type="text"
            id="description"
            className={`browser-default ${
              errors.hasOwnProperty('description') ? 'invalid' : ''
            }`}
            name="description"
          />
          {errors.hasOwnProperty('description') && (
            <ValidateMessage errorMessage={errors.description} />
          )}
        </div>
        <div className="input-field col s12">
          <label
            htmlFor="short_description"
            className={short_description.length > 0 ? 'active' : ''}
          >
            Breve Descrição
          </label>
          <input
            value={short_description}
            onChange={e => setShort_description(e.target.value)}
            type="text"
            id="short_description"
            className={`browser-default ${
              errors.hasOwnProperty('short_description') ? 'invalid' : ''
            }`}
            name="short_description"
          />
          {errors.hasOwnProperty('short_description') && (
            <ValidateMessage errorMessage={errors.description} />
          )}
        </div>
        <div className="input-field col s12">
          <label htmlFor="code" className={code.length > 0 ? 'active' : ''}>
            Código do Produto
          </label>
          <input
            value={code}
            onChange={e => setCode(e.target.value)}
            type="text"
            id="code"
            className={`browser-default ${
              errors.hasOwnProperty('code') ? 'invalid' : ''
            }`}
            name="code"
          />
          {errors.hasOwnProperty('code') && (
            <ValidateMessage errorMessage={errors.description} />
          )}
        </div>
        <div className="input-field col s12">
          <label htmlFor="status" className="active">
            Status
          </label>
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            id="status"
            className={`browser-default ${
              errors.hasOwnProperty('status') ? 'invalid' : ''
            }`}
            name="status"
          >
            <option value="enable">Habilitado</option>
            <option value="disable">Desabilitado</option>
          </select>
          {errors.hasOwnProperty('status') && (
            <ValidateMessage errorMessage={errors.description} />
          )}
        </div>
        <div className="input-field col s12 m6">
          <label htmlFor="qty" className="active">
            Quantidade
          </label>
          <input
            value={qty}
            onChange={e => setQty(e.target.value)}
            type="number"
            id="qty"
            className={`browser-default ${
              errors.hasOwnProperty('qty') ? 'invalid' : ''
            }`}
            name="qty"
          />
          {errors.hasOwnProperty('qty') && (
            <ValidateMessage errorMessage={errors.description} />
          )}
        </div>
        <div className="input-field col s12 m6">
          <label htmlFor="value" className="active">
            Valor
          </label>
          <CurrencyInput
            onChange={(e, decimal) => setValue(decimal)}
            value={value}
            decimalSeparator=","
            thousandSeparator="."
            className={`browser-default ${
              errors.hasOwnProperty('valor') ? 'invalid' : ''
            }`}
            name="value"
            id="value"
          />
          {errors.hasOwnProperty('valor') && (
            <ValidateMessage errorMessage={errors.description} />
          )}
        </div>
        <div className="input-field col s12">
          <Link to="/" className="btn__default--ghost">
            Voltar
          </Link>
          <button className="btn__default right" type="submit">
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormProducts;
