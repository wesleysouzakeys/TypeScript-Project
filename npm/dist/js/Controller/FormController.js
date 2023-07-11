import { Pessoa } from "../Models/Pessoa.js";
import { Pessoas } from "../Models/Pessoas.js";
import { PessoasView } from "../Views/pessoas-view.js";
import { TimesView } from "../Views/times-view.js";
export class PessoaController {
    constructor() {
        this.pessoas = new Pessoas();
        this.timesView = new TimesView('.times');
        this.pessoasView = new PessoasView('.colaboradores');
        this.name = document.querySelector("#name");
        this.role = document.querySelector('#role');
        this.image = document.querySelector('#image');
        this.team = document.querySelector('#team');
        this.timesView.update();
    }
    criaPessoa() {
        const pessoa = new Pessoa(this.name.value, this.role.value, this.image.value, this.team.options[this.team.selectedIndex].text);
        this.adicionaAoTime(pessoa);
        this.limpaSelecao();
    }
    adicionaAoTime(pessoa) {
        this.pessoas.adiciona(pessoa);
    }
    limpaSelecao() {
        this.name.value = '';
        this.role.value = '';
        this.image.value = '';
        this.team.selectedIndex = 0;
    }
}
