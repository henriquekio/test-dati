# Tecnologias utilizadas

* [React](https://pt-br.reactjs.org/)
* [Sass](https://sass-lang.com/)
* [Materialize](https://materializecss.com/)
* [SweetAlert](https://sweetalert.js.org/)
* [Axios](https://github.com/axios/axios)
* [React Currency Input](https://github.com/jsillitoe/react-currency-input)
* [EsLint](https://eslint.org/)
* [Preetier](https://prettier.io/)
* [React Lottie](https://www.npmjs.com/package/react-lottie)

## Aplicação

O desafio proposto era realizar um CRUD consumindo uma API com um endpoint de produtos utilizando React. Foi proposto também a criação de filtros para a listagem de produtos.

## Executar Projeto

1. Faça o clone da aplicação
1. Verifique se seu npm ou yarn estão atualizados. *Versão recomendada do node:* **12.13.0 Lts**. 
1. Execute ```npm install``` ou ```yarn install```
1. Para ambiente de desenvolvimento execute ```npm run start``` ou ```yarn start```
1. Para gerar a versão de produção execute ```npm run build``` ou ```yarn build```
1. Pronto! :metal:

## Fluxo

* Após carregada a tela inicial possui a listagem de produtos cadastrados. Com icones para as ações do CRUD. As ações para cada item são *visualizar, deletar e alterar*.
* Para cadastrar um novo produto, o link se encontra na barra de navegação, em que é possível acessar o formulário e a listagem de produtos. 

## Obervações

* Pelo fluxo total da aplicação não foi necessário utilização Redux. Como se tratam de poucos dados foi feito o uso do [React Context API](https://pt-br.reactjs.org/docs/context.html) para o compartilhamento de dados entre componentes.
