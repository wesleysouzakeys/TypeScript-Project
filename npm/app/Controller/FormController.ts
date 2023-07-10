import { Pessoa } from "../Models/Pessoa.js";
import { Times } from "../Models/Times.js";
import { TimesView } from "../Views/times-view.js";

export class PessoaController {
    private name: HTMLInputElement
    private role: HTMLInputElement
    private image: HTMLInputElement
    private team: HTMLSelectElement
    private times = new Times();
    private timesView = new TimesView('#colaboradores')

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

        this.adicionaAoTime(pessoa)

        this.limpaSelecao()
    }

    adicionaAoTime(pessoa: Pessoa): void {
        this.times.adiciona(pessoa)
        console.log(this.times.lista())
    }

    limpaSelecao(): void {
        this.name.value = ''
        this.role.value = ''
        this.image.value = ''
        this.team.selectedIndex = 0
    }
}