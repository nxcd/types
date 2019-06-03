export interface DocumentData {
  cnh?: Cnh
  data_nascimento?: string
  documento?: Documento
  endereco?: Endereco
  filiacao?: Filiacao
  nacionalidade?: number
  nome?: string
  sexo?: Sexo
  situacao_cpf?: string
}

export interface ImageResponse {
  disponivel: boolean
  probabilidade: string
  similaridade: number
}

export interface Cnh {
  categoria?: string
  data_primeira_habilitacao?: Date
  data_validade?: Date
  numero_registro?: string
  registro_nacional_estrangeiro?: string
}

export interface Documento {
  numero?: string
  orgao_expedidor?: string
  tipo?: number
  uf_expedidor?: string
}

export interface Endereco {
  bairro?: string
  cep?: string
  complemento?: string
  logradouro?: string
  municipio?: string
  numero?: string
  uf?: string
}

export interface Filiacao {
  nome_mae?: string
  nome_pai?: string
}

export enum Sexo {
  F = "F",
  M = "M",
}

export interface ImageInput {
  image: string
}
