export class Pessoas {
    constructor() {
        this.pessoas = [
        // new Pessoa("Wesley", "Dev", "https://github.com/wesleysouzakeys.png", "Programação"),
        // new Pessoa("Thiago", "Front", "https://github.com/Thiago-Nascimento.png", "Front-End")
        ];
    }
    adiciona(pessoa) {
        this.pessoas.push(pessoa);
        return pessoa;
    }
}
