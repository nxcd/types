import { Filiacao, Endereco, Documento, Cnh } from './helpers'

export interface DataOnlyOutput {
  sexo: boolean
  data_nascimento: boolean
  situacao_cpf: boolean
  filiacao?: Filiacao
  nacionalidade: boolean
  endereco?: Endereco
  documento?: Documento
  cnh?: Cnh
}
