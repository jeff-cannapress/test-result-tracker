
export type ITestResult = {
    testId: number;
    testUnitsId: number;
    value: number;
    comment: string;
}
export type ILab = {
    date: Date;
    fasted: boolean;
    notes: string;
    results: ITestResult[];
    patientStats: {
        height: number;
        weight: number;
    }
};
export type IKeyDate = {
    date: Date;
    title: string;
    notes: string;
}
export type Report = {
    title: string;
    notes: string;
    keyDates: IKeyDate[];
    labs: ILab[];
    include: {
        testId: number,

    }[]
};

export class Lab implements ILab {
    date: Date;
    fasted: boolean;
    notes: string;
    results: ITestResult[];
    patientStats: { height: number; weight: number; };
    constructor(values: Partial<ILab> = {}) {
        this.date = values.date ?? new Date('now');
        this.fasted = values.fasted ?? false;
        this.notes = values.notes ?? '';
        this.results = values.results ?? [];
        this.patientStats = values.patientStats ?? {
            height: 0,
            weight: 0
        };
    }
}
export class TestResult implements ITestResult {
    testId: number;
    testUnitsId: number;
    value: number;
    comment: string;
    constructor(values: Partial<ITestResult> = {}) {
        this.testId = values.testId ?? 0;
        this.testUnitsId = values.testUnitsId ?? 0;
        this.value = values.value ?? 0;
        this.comment = values.comment ?? '';
    }
}


export type TestUnits = {
    id: number;
    name: string;
    abbreviation: string;
    normalizationFactor: number;
    intlUnit: string
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
    getLabs(patientId: string): Promise<ILab[]>;
    saveLab(patientId: string, lab: ILab): Promise<ILab[]>;
    removeLab(patientId: string, lab: ILab): Promise<ILab[]>;
}

