export type Classification = {
  probability: number,
  // tagId: string,
  tagName: string
}

export type Classifications = {
  id: string,
  created: Date | null
  classifications: Classification
}
