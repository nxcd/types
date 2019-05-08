export declare type Classification = {
    probability: number;
    tagName: string;
};
export declare type Classifications = {
    id: string;
    created: Date | null;
    classifications: Array<Classification>;
};
