export declare type LineBounds = {
    boundingBox: number[];
    text: string;
    words: WordBound[];
};
declare type WordBound = {
    boundingBox: number[];
    confidence?: 'Low' | 'Medium' | 'High';
    text: string;
};
export {};
