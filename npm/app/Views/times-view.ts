export class TimesView {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(): string {
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

    update(): void {
        this.elemento.innerHTML = this.template();
    }
}