import { Documento, Cnh, Endereco, Filiacao, ImageResponse } from './helpers'

export interface DataAndImageOutput {
  imageData: ImageResponse,
  documentData: {
    filiacao?: Filiacao
    endereco?: Endereco
    documento?: Documento
    cnh?: Cnh
  }
}
