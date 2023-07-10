import { Pessoa } from "./Pessoa.js";

export class Times {
    public times: Pessoa[] = [];

    adiciona(pessoa: Pessoa) {
        this.times.push(pessoa)
    }

    lista(): readonly Pessoa[] {
        return this.times;
    }
}

