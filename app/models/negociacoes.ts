import { Negociacao } from "./negociacao";

export class Negociacoes {
  private negociacoes: Negociacao[] = []; //Negociacao[] é = Array<Negociacao>

  adicionar(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] { // readonly Negociacao[] é = ReadonlyArray<Negociacao>
    return this.negociacoes;
  }
}

