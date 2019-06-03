import { DocumentData, ImageInput } from './helpers'

export interface DataAndImageInput {
  document: string
  documentData?: DocumentData
  imageData?: ImageInput
}
