import { LineBounds } from './LineBounds'
import { MicrosoftOperationStatus } from './MicrosoftOperationStatus'

export interface IVisionResponse {
  properties: {
    status: MicrosoftOperationStatus
  }
  texts: string[]
  regions: {
    lines: LineBounds[]
  }
}
