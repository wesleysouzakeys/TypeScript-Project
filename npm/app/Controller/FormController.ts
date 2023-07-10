import { Pessoa } from "../Models/Pessoa.js";
import { Times } from "../Models/Times.js";

export class PessoaController {
    private name: HTMLInputElement
    private role: HTMLInputElement
    private image: HTMLInputElement
    private team: HTMLSelectElement
    private times = new Times();

    constructor() {
        this.name = document.querySelector("#name")
        this.role = document.querySelector('#role')
        this.image = document.querySelector('#image')
        this.team = document.querySelector('#team');
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