export declare type CropTreatement = {
    treatment: 'crop';
    params: {
        width: number;
        height: number;
        left: number;
        top: number;
    };
};
export declare type ResizeTreatment = {
    treatment: 'resize';
    params: {
        width: number;
        height: number;
    };
};
export declare type RotateTreatment = {
    treatment: 'rotate';
    params: {
        angle: number;
    };
};
export declare type Treatment = CropTreatement | ResizeTreatment | RotateTreatment;
