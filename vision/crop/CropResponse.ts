import { Prediction } from './Prediction'

export type CropResponse = {
  id: string
  project: string
  iteration: string
  created: string
  predictions: Prediction[]
}
