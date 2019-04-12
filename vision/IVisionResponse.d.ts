import { LineBounds } from './LineBounds';
import { MicrosoftOperationStatus } from './MicrosoftOperationStatus';
export declare type IVisionResponse = {
    properties: {
        status: MicrosoftOperationStatus;
    };
    texts: string[];
    regions: {
        lines: LineBounds[];
    };
};
