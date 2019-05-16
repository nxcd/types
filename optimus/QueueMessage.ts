import { Treatment } from './Treatment'

export interface QueueMessage {
  id: string,
  file: string,
  treatment: Treatment
}
