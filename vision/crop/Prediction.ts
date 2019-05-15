import { BoundingBox } from '../BoundingBox'

export type Prediction = {
  probability: number
  tagId: string
  tagName: string
  boundingBox: BoundingBox
}
