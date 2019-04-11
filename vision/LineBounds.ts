export interface LineBounds {
  boundingBox: number[]
  text: string
  words: WordBound[]
}

interface WordBound {
  boundingBox: number[]
  confidence?: 'Low' | 'Medium' | 'High'
  text: string
}
