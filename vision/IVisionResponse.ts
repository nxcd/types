import { LineBounds } from './LineBounds'
import { MicrosoftOperationStatus } from './MicrosoftOperationStatus'

export type IVisionResponse = {
  properties: {
    status: MicrosoftOperationStatus
  }
  texts: string[]
  regions: {
    lines: LineBounds[]
  }
}
