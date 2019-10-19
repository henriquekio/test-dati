/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

const httpDefault = axios.create({
  baseURL: process.env.REACT_APP_API_DEFAULT_URL
});

httpDefault.interceptors.response.use(
  response => {
    if (response.status === 401) {
      return Promise.reject({
        messages: ['Ocorreu um erro de autenticação']
      });
    }

    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export { httpDefault };
