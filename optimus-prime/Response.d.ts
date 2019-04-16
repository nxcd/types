export declare type SuccessResponse = {
    ok: true;
    file: string;
    error: null;
};
export declare type ErrorResponse = {
    ok: false;
    file: string;
    error: {
        code: string;
        message: string;
    };
};
export declare type Response = SuccessResponse | ErrorResponse;
