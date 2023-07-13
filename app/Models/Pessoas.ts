import { Pessoa } from "./Pessoa.js";

export class Pessoas {

    public pessoas: Pessoa[] = [
        // new Pessoa("Wesley", "Dev", "https://github.com/wesleysouzakeys.png", "Programação"),
        // new Pessoa("Thiago", "Front", "https://github.com/Thiago-Nascimento.png", "Front-End")
    ];

    adiciona(pessoa: Pessoa) {
        this.pessoas.push(pessoa)
    }

    lista(): Pessoa[] {
        return this.pessoas
    }
}
