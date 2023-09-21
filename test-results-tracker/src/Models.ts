export type Entry = {
    testId: number;
    comment: string;
    measure: number;
}
export type Lab = {
    date: Date;
    entries: Entry[]
    notes: string;
    fasted: boolean;
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
}

export interface IDataStore {
    getCategories(): Promise<TestCategory[]>;
    getTests(): Promise<Test[]>;
    getLabs(): Promise<Lab[]>;
    addLab(lab: Lab): Promise<void>;
}