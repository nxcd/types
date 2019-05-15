import { BoundingBox } from '../BoundingBox';
export declare type Prediction = {
    probability: number;
    tagId: string;
    tagName: string;
    boundingBox: BoundingBox;
};
