import { PessoaController } from './Controller/PessoaController.js';

const controller = new PessoaController();
const form = document.querySelector('.form')

form.addEventListener('submit', event => {
    event.preventDefault()
    controller.criaPessoa()
})
