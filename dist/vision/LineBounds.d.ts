declare namespace Vision {
    type LineBounds = {
        boundingBox: number[];
        text: string;
        words: WordBound[];
    };
    type WordBound = {
        boundingBox: number[];
        confidence?: 'Low' | 'Medium' | 'High';
        text: string;
    };
}
