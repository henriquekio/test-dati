import React from 'react';
import CurrencyInput from 'react-currency-input';

const FormProducts = (props) => {
  return (
    <form className="card-panel rounded form-default">
      <div className="row">
        <div className="input-field col s12">
          <label htmlFor="description" className="active">Descrição Completa</label>
          <input type="text" id="description" className="browser-default" name="description"/>
        </div>
        <div className="input-field col s12">
          <label htmlFor="short_description" className="active">Breve Descrição</label>
          <input type="text" id="short_description" className="browser-default"
                 name="short_description"/>
        </div>
        <div className="input-field col s12">
          <label htmlFor="code" className="active">Código do Produto</label>
          <input type="text" id="code" className="browser-default" name="code"/>
        </div>
        <div className="input-field col s12">
          <label htmlFor="status" className="active">Código do Produto</label>
          <select id="status" className="browser-default" name="status">
            <option value="enabled">Habilitado</option>
            <option value="disables">Desabilitado</option>
          </select>
        </div>
        <div className="input-field col s6">
          <label htmlFor="qty" className="active">Quantidade</label>
          <input type="text" id="qty" className="browser-default" name="qty"/>
        </div>
        <div className="input-field col s6">
          <label htmlFor="value" className="active">Valor</label>
          <CurrencyInput
            decimalSeparator=","
            thousandSeparator="."
            className="browser-default"
            name="value"
            id="value"
          />
        </div>
        <div className="input-field col s12">
          <button className="btn__default--ghost" type="button">Voltar</button>
          <button className="btn__default right" type="button">Salvar</button>
        </div>
      </div>
    </form>
  );
};

export default FormProducts;