import { PessoaController } from './Controller/FormController.js';
const formController = new PessoaController();
const formElement = document.querySelector('.form');
formElement.addEventListener('submit', event => {
    event.preventDefault();
    formController.criaPessoa();
});
