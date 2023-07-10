import { Pessoa } from "../Models/Pessoa.js";
import { Times } from "../Models/Times.js";
export class PessoaController {
    constructor() {
        this.times = new Times();
        this.name = document.querySelector("#name");
        this.role = document.querySelector('#role');
        this.image = document.querySelector('#image');
        this.team = document.querySelector('#team');
    }
    criaPessoa() {
        const pessoa = new Pessoa(this.name.value, this.role.value, this.image.value, this.team.options[this.team.selectedIndex].text);
        this.adicionaAoTime(pessoa);
        this.limpaSelecao();
    }
    adicionaAoTime(pessoa) {
        this.times.adiciona(pessoa);
        console.log(this.times.lista());
    }
    limpaSelecao() {
        this.name.value = '';
        this.role.value = '';
        this.image.value = '';
        this.team.selectedIndex = 0;
    }
}
