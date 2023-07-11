export class Times {
    constructor() {
        this.times = [];
    }
    adiciona(pessoa) {
        this.times.push(pessoa);
    }
    lista() {
        return this.times;
    }
}
