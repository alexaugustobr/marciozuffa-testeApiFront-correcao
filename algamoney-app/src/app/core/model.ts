import { ICategoria, IEndereco, ILancamento, IPessoa } from "./interface";

export class Endereco implements IEndereco {
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
  }
  
  export class Pessoa implements IPessoa {
    codigo: number;
    nome: string;
    endereco = new Endereco();
    ativo = true;
  }
  
  export class Categoria implements ICategoria {
    codigo: number;
    nome: string;
  }
  
  export class Lancamento implements ILancamento {
    codigo: number;
    tipo = 'RECEITA';
    descricao: string;
    dataVencimento: Date;
    dataPagamento: Date;
    valor: number;
    observacao: string;
    pessoa = new Pessoa();
    categoria = new Categoria();
  }