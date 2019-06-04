import { BoundingBox } from '../vision/BoundingBox'
import { AvailableTreatments } from './AvailableTreatments'

export type CropTreatment = {
  name: AvailableTreatments.CROP,
  params: {
    regions: BoundingBox[]
  }
}

export type ResizeTreatment = {
  name: AvailableTreatments.RESIZE,
  params: {
    width: number
    height: number
  }
}

export type RotateTreatment = {
  name: AvailableTreatments.ROTATE,
  params: {
    angle: number
  }
}

export type PdfToImageTreatment = {
  name: AvailableTreatments.PDFTOIMAGE,
  params: {}
}

export type DownsizeTreatment = {
  name: AvailableTreatments.DOWNSIZE,
  params: {
    maxWidth: number,
    maxHeight: number,
    maxSize: number
  }
}

export type Treatment = CropTreatment | ResizeTreatment | RotateTreatment | PdfToImageTreatment | DownsizeTreatment
