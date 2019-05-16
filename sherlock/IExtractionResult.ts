export interface IExtractionResult {
  exact: Record<string, string>
  fallback: Record<string, string>
  missing?: Array<string>
}
