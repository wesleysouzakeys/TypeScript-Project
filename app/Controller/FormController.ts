import { Pessoa } from "../Models/Pessoa.js";
import { Pessoas } from "../Models/Pessoas.js";
import { PessoasView } from "../Views/pessoas-view.js";
import { TimesView } from "../Views/times-view.js";

export class PessoaController {
    private name: HTMLInputElement
    private role: HTMLInputElement
    private image: HTMLInputElement
    private team: HTMLSelectElement
    private pessoas = new Pessoas();
    private timesView = new TimesView('.times');
    private pessoasView = new PessoasView('.colaboradores')


    constructor() {
        this.name = document.querySelector("#name")
        this.role = document.querySelector('#role')
        this.image = document.querySelector('#image')
        this.team = document.querySelector('#team');
        this.timesView.update();
    }

    criaPessoa(): void {
        const pessoa = new Pessoa(
            this.name.value,
            this.role.value,
            this.image.value,
            this.team.options[this.team.selectedIndex].text
        )

        this.pessoas.adiciona(pessoa)
        this.pessoasView.update(pessoa)

        this.limpaSelecao()
    }

    limpaSelecao(): void {
        this.name.value = ''
        this.role.value = ''
        this.image.value = ''
        this.team.selectedIndex = 0
    }
}