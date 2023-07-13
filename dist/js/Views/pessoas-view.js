export class PessoasView {
    constructor(seletor) {
        setTimeout(() => {
            this.elemento = document.querySelector(seletor);
        }, 1000);
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
    update(pessoas) {
        pessoas.forEach(i => { this.elemento.insertAdjacentHTML('beforeend', this.template(i)); });
    }
}
