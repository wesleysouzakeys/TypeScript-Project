import { PessoaController } from './Controller/FormController.js';
import { Times } from './Models/Times.js';
const times = new Times();
const formController = new PessoaController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    formController.criaPessoa();
});
