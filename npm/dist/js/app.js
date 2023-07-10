import { PessoaController } from './Controller/FormController.js';
import { Times } from './Models/Times.js';
import { TimesView } from './Views/times-view.js';
const times = new Times();
const formController = new PessoaController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    formController.criaPessoa();
});
const timesView = new TimesView("#colaboradores");
const template = timesView.template();
console.log(template);
