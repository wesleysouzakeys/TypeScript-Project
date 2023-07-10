import { Pessoa } from "../components/Pessoa.js";

export class PessoaController {
    name: HTMLInputElement
    role: HTMLInputElement
    image: HTMLInputElement
    team: HTMLSelectElement

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

        pessoa.mostra()

        this.limpaSelecao()
    }

    limpaSelecao(): void {
        this.name.value = ''
        this.role.value = ''
        this.image.value = ''
        this.team.selectedIndex = 0
    }
}