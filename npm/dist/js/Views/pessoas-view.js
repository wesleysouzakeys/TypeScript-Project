import { Pessoas } from "../Models/Pessoas.js";
export class PessoasView {
    constructor(seletor) {
        setTimeout(() => {
            this.elemento = document.querySelector(seletor);
        });
        this.pessoas = new Pessoas().pessoas;
        console.log(this.pessoas);
    }
    template(pessoa) {
        return `
        <div class='colaborador'>
            <div class='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src=${pessoa.image} alt={nome}/>
            </div>
            <div class='rodape'>
                <h4>${pessoa.name}</h4>
                <h5>${pessoa.role}</h5>
            </div>
        </div>`;
    }
    update() {
        // console.log(this.elemento)
        this.pessoas.forEach(i => { this.elemento.insertAdjacentHTML('afterbegin', this.template(i)); });
        // console.log(this.pessoas)
    }
}
