import { Filiacao, Endereco, Documento, Cnh, ImageResponse } from './helpers'

export interface ImageOnlyOutput {
  filiacao?: Filiacao
  endereco?: Endereco
  documento?: Documento
  cnh?: Cnh
  biometria_face: ImageResponse
}
