declare namespace Vision {
    type IVisionResponse = {
        properties: {
            status: MicrosoftOperationStatus;
        };
        texts: string[];
        regions: {
            lines: LineBounds[];
        };
    };
}
