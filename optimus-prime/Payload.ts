import { Treatment } from './Treatment'

export type MessageContent = {
  id: string,
  file: string,
  pipeline: Treatment[]
}
