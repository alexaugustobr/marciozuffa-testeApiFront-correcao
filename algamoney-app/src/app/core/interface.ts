export interface ApiResponse<T> {
    content: T[],
    last: boolean,
    totalPages: number,
    totalElements: number,
    number: number,
    size: number,
    sort: {
        sorted?: boolean,
        unsorted?: boolean,
        empty?: boolean
    },
    first: boolean,
    numberOfElements: number,
    empty: boolean
}

export interface ILancamento {
    codigo: number,
    descricao: string,
    dataVencimento: Date,
    dataPagamento?: Date,
    valor: number,
    observacao: string,
    tipo: string,
    categoria: ICategoria,
    pessoa: IPessoa
}

export interface ICategoria {
    codigo: number,
    nome: string
}

export interface IPessoa {
    codigo: number,
    nome: string,
    endereco: IEndereco,
    ativo: boolean
}

export interface IEndereco {
    logradouro: string,
    numero: number,
    complemento?: string,
    bairro: string,
    cep: string,
    cidade: string,
    estado: string
}