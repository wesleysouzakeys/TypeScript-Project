import { Pessoa } from "./Pessoa.js";

export class Pessoas {

    public pessoas: Pessoa[] = [];

    adiciona(pessoa: Pessoa) {
        this.pessoas.push(pessoa)
    }

    lista(): readonly Pessoa[] {
        return this.pessoas;
    }
}
