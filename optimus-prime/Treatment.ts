export type CropTreatement = {
  treatment: 'crop',
  params: {
    width: number
    height: number
    left: number
    top: number
  }
}

export type ResizeTreatment = {
  treatment: 'resize',
  params: {
    width: number
    height: number
  }
}

export type RotateTreatment = {
  treatment: 'rotate',
  params: {
    angle: number
  }
}

export type Treatment = CropTreatement | ResizeTreatment | RotateTreatment
