import { httpDefault } from '../helpers/http';

const getAllProducts = () => httpDefault.get('products', { params: { cmd: 'list' } });

// const getProducts = () =>

export { getAllProducts };
