import { BoundingBox } from '../BoundingBox'

export type Prediction = {
  probability: number
  tagId: string
  tagName: string
  boundingBox: BoundingBox
}

export type Predictions = {
  id: string,
  //  project: string,
  //  iteration: string,
  created: Date | null,
  predictions: Array<Prediction>
}
