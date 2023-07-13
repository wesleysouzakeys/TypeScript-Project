import { Pessoa } from "../Models/Pessoa.js";

export class PessoasView {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        setTimeout(() => {
            this.elemento = document.querySelector(seletor)
        }, 1000)
    }

    template(pessoa: Pessoa): string {
        return `
        <div class='colaborador'>
            <div class='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src=${pessoa.image} alt={nome}/>
            </div>
            <div class='rodape'>
                <h4>${pessoa.name}</h4>
                <h5>${pessoa.role}</h5>
            </div>
        </div>`
    }

    update(pessoas: Pessoa[]): void {
        pessoas.forEach(i => { this.elemento.insertAdjacentHTML('beforeend', this.template(i)) })
    }

}