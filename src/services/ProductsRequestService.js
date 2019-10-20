import { httpDefault } from '../helpers/http';

const getAllProducts = () =>
  httpDefault.get('products', { params: { cmd: 'list' } });

const getProducts = (id = 0) =>
  httpDefault.get('products', { params: { cmd: 'details', id } });

const createProducts = (params = {}) => httpDefault.post('products', params);

const updateProducts = (params = {}, id = 0) => httpDefault.put(`products/${id}`, params);

const deleteProducts = (params = {}, id = 0) => httpDefault.delete(`products/${id}`, params);

export { getAllProducts, getProducts, createProducts, updateProducts, deleteProducts };
