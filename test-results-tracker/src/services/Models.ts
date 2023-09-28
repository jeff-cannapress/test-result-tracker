
export type TestResult = {
    testId: number;
    testUnitsId: number;
    value: number;
    comment: string;
}
export type Lab = {
    date: Date;
    fasted: boolean;
    notes: string;
    results: TestResult[]
};
export type KeyDate = {
    date:Date;
    title:string;
    notes:string;
}


export type TestUnits = {
    id: number;
    name: string;
}
export type Test = {
    id: number;
    categoryId: number;
    name: string;
    units: { testUnitsId: number, normalizationFactor: number }[];
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

export interface LabDataStore {
    getTests(): Promise<TestCategory[]>;
    getLabs(): Promise<Lab[]>;
    saveLab(lab: Lab): Promise<Lab[]>;
    removeLab(lab: Lab): Promise<Lab[]>;
}

