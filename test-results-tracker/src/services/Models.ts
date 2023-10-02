
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
    date: Date;
    title: string;
    notes: string;
}
export type Report = {
    title: string;
    notes: string;
    keyDates: KeyDate[];
    labs: Lab[];
    include: {
        testId: number,

    }[]


};


export type TestUnits = {
    id: number;
    name: string;
    abbreviation: string;
    normalizationFactor: number;
    intlUnit:string
}
export type TestDefinition = {
    id: number;
    categoryId: number;
    name: string;
    // test definitions will store all values as g/L
    units: number[];
    // test definitions will store all values as g/L
    referenceRange: {
        min: number;
        max: number;
    };
};
export type TestCategory = {
    id: number;
    name: string;
    tests: TestDefinition[];
}



export interface LabDataStore {
    getTestDefinitions(): Promise<TestCategory[]>;
    getLabs(patientId: string): Promise<Lab[]>;
    saveLab(patientId: string, lab: Lab): Promise<Lab[]>;
    removeLab(patientId: string, lab: Lab): Promise<Lab[]>;
}

