import { IVisionResponse } from './IVisionResponse'
import { Unit } from '../unit-system/Measure';

export type IAngleRequest = {
  kind: string,
  source: IVisionResponse,
  keywords?: string[],
  pruneTolerance: 7,
  averageOnly: true,
  filterOutliers: true,
  unit: Unit.degree | Unit.radian
}

export type IAngleResponse = {
  unit: Unit.degree | Unit.radian,
  values?: Record<string, number>,
  average: number,
  to: (unit: Unit.degree | Unit.radian) => IAngleResponse
}

export const newAngleResponse = (unit: Unit.degree | Unit.radian, average: number, values?: Record<string, number>): IAngleResponse => {
  return {
    unit: unit, values: values, average: average, to: function (unit: Unit.degree | Unit.radian): IAngleResponse {
      let rv = this;
      if (rv.unit !== unit) {
        let cvt = (v: number): number => {
          return unit == Unit.degree ? (180 * v) / Math.PI : (Math.PI * v) / 180
        }
        rv = Object.assign({ ...rv }, rv);
        rv.unit = unit;
        let vals: Record<string, number>;
        if (rv.values) {
          // late assignment to avoid compiler error
          vals = rv.values
          Object.entries(vals).forEach(([k, v]) => {
            vals[k] = cvt(v)
          })
        }
        rv.average = cvt(rv.average)
      }
      return rv;
    }
  }
}
