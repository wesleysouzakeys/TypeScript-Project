export class TimesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
        <div class='colaborador'>
                <div class='cabecalho'>
                    <img src="https://github.com/wesleysouzakeys.png" alt=Wesley />
                </div>
                <div class='rodape'>
                    <h4>Teste</h4>
                    <h5>Desenvolvedor</h5>
                </div>
            </div>
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
