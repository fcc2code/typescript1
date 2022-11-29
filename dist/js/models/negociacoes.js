export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Negociacao[] é = Array<Negociacao>
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
