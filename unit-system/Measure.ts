
// Use string values for clearer json payloads
export enum Unit {
  radian = 'radian',
  degree = 'degree',
  meter = 'meter',
  // TODO add 4859 more members
}

export type Measure = {
  value: number,
  unit: Unit
}
