
export type TestResult = {
    testId: number; // serialized as uint32
    value: number; // serialized as float64
    comment: string; // serialized as length:uint32, uint8[] bytes
}
export type Lab = {
    date: Date; // serialized as uint32 YYYYMMDD
    fasted: boolean; // serialized as uint8
    notes: string;  // serialized as length:uint32, uint8[] bytes
    results: TestResult[] // serialized as count:uint32, resultLengths:uint32[], results
};
export type Test = {
    id: number;
    categoryId: number;
    name: string;
    units: string;
    referenceRange: {
        min: number;
        max: number;
    };
};
export type TestCategory = {
    id: number;
    name: string;
    tests: Test[];
}

export type RootAppState = {
    tests: TestCategory[];
    labs: Lab[];
}

export interface IStoreLabData {
    getTests(): Promise<TestCategory[]>;
    getLabs(): Promise<Lab[]>;
    saveLab(lab: Lab): Promise<Lab[]>;
}

