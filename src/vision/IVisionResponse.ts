namespace Vision {
  export type IVisionResponse = {
    properties: {
      status: MicrosoftOperationStatus
    }
    texts: string[]
    regions: {
      lines: LineBounds[]
    }
  }
}
