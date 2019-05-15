import { Prediction } from './Prediction';
export declare type CropResponse = {
    id: string;
    project: string;
    iteration: string;
    created: string;
    predictions: Prediction[];
};
