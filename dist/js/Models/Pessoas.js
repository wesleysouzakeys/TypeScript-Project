export class Pessoas {
    constructor() {
        this.pessoas = [];
    }
    adiciona(pessoa) {
        this.pessoas.push(pessoa);
        return pessoa;
    }
}
