import { IVisionResponse } from './IVisionResponse';
import { Unit } from '../unit-system/Measure';
export declare type IAngleRequest = {
    kind: string;
    source: IVisionResponse;
    keywords?: string[];
    pruneTolerance: 7;
    averageOnly: true;
    filterOutliers: true;
    unit: Unit.degree | Unit.radian;
};
export declare type IAngleResponse = {
    unit: Unit.degree | Unit.radian;
    values?: Record<string, number>;
    average: number;
    to: (unit: Unit.degree | Unit.radian) => IAngleResponse;
};
export declare const newAngleResponse: (unit: Unit.radian | Unit.degree, average: number, values?: Record<string, number> | undefined) => IAngleResponse;
