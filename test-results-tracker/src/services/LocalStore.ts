
import { LabDataStore, Lab, TestCategory, TestUnits, TestDefinition } from "./Models";

const unitsOfMass = [
    { name: 'grams', abbreviation: 'g', value: 1.0, intlUnit: 'mass-gram' },
    { name: 'milligrams', abbreviation: 'mg', value: 0.001, intlUnit: 'mass-milligram' },
    { name: 'micrograms', abbreviation: 'mcg', value: 0.000001, intlUnit: 'mass-microgram' },
    { name: 'international unit', abbreviation: 'IU', value: 0.0067, intlUnit: 'mass-milligram' }
];
const unitsOfVolume = [
    { name: 'liter', abbreviation: 'L', value: 1.0, intlUnit: 'volume-liter' },
    { name: 'decilitre', abbreviation: 'dL', value: 1.0 / 10, intlUnit: 'volume-deciliter' },
    { name: 'milliliter', abbreviation: 'mL', value: 1.0 / 1000, intlUnit: 'volume-milliliter' },
];

export const cannedTestUnits: TestUnits[] = unitsOfMass.map((m, mi) => unitsOfVolume.map((v, vi) => {
    const unit: string = `${m.intlUnit}-per-${v.intlUnit}`;
    return {
        id: mi * 10 + vi,
        name: `${m.name} per ${v.name}`,
        intlUnit: unit,
        abbreviation: `${m.abbreviation}/${v.abbreviation}`,
        normalizationFactor: m.value / v.value
    };
}))
    .flat();
console.log(cannedTestUnits);


function generateCategories(): TestCategory[] {
    function shuffleTestUnits() {
        const source = cannedTestUnits.map(x => x);
        const result: Required<typeof source> = [];
        while (source.length > 0) {
            const idx = Math.floor(Math.random() * (source.length));

            result.push(source[idx]);
            source.splice(idx, 1);
        }
        return result;
    }

    function getRandomBetween(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const result: TestCategory[] = [];
    const baseCode = "A".charCodeAt(0)
    for (let i = 0; i <= 10; i++) {
        const tests: TestDefinition[] = [];
        const catLetter = String.fromCharCode(baseCode + i);
        for (let j = 1; j <= 10; j++) {
            const availableUnits = shuffleTestUnits();
            const baseUnit = availableUnits[0];
            const min = getRandomBetween(baseUnit.normalizationFactor / 10, baseUnit.normalizationFactor * 10);
            tests.push({
                id: (i + 1) * 100 + j,
                categoryId: (i + 1),
                name: `Test ${catLetter}-${j}`,
                units: availableUnits.slice(0, 4).map(u => u.id),
                referenceRange: {
                    min: min,
                    max: getRandomBetween(min, baseUnit.normalizationFactor * 10)
                }
            });
        }
        result.push({
            id: i + 1,
            name: 'Category ' + catLetter,
            tests: tests
        });
    }
    return result;
}

export const cannedCategories = generateCategories();

// export class FileSystemStore implements LabDataStore{
//     private readonly filesystemFactory:()=>Promise<FileSystemDirectoryHandle>;
//     constructor (filesystemFactory:()=>Promise<FileSystemDirectoryHandle>){
//         this.filesystemFactory = filesystemFactory || (()=>navigator.storage.getDirectory());

//     }
//     private filesystemRoot: FileSystemDirectoryHandle|null = null;
//     private async getRootFilesystem(): Promise<FileSystemDirectoryHandle>{
//         if(this.filesystemRoot === null){
//             this.filesystemRoot = await this.filesystemFactory();
//         }
//         return this.filesystemRoot;
//     }
//     private async readJson<T>(fileName:string):Promise<T|undefined>{
//         try{
//             const file = await (await this.getRootFilesystem()).getFileHandle(fileName);

//         }
//         catch(ex){
//             return undefined;
//         }
//     }
//     async getTests(): Promise<TestCategory[]> {
//         throw new Error("Method not implemented.");
//     }
//     getLabs(): Promise<Lab[]> {
//         throw new Error("Method not implemented.");
//     }
//     saveLab(lab: Lab): Promise<Lab[]> {
//         throw new Error("Method not implemented.");
//     }
//     removeLab(lab: Lab): Promise<Lab[]> {
//         throw new Error("Method not implemented.");
//     }

// }

export default class LocalStore implements LabDataStore {
    //private static readonly StoreKey = "";
    private storeKey(patientId: string) { return `test-results-tracker/labs/${patientId}`; }
    private store: Storage
    constructor(store: Storage | null = null) {
        this.store = store || window.localStorage;
    }
    getTestDefinitions(): Promise<TestCategory[]> {
        return Promise.resolve(cannedCategories);
    }
    async getLabs(patientId: string): Promise<Lab[]> {
        const json = this.store.getItem(this.storeKey(patientId));
        if (json === null || json === "" || json === undefined) {
            return [];
        }
        else {
            return JSON.parse(json);
        }
    }
    async saveLab(patientId: string, lab: Lab): Promise<Lab[]> {
        let labs = await this.getLabs(patientId);
        labs = labs.filter(l => l.date.getTime() !== lab.date.getTime()).concat([lab]);
        this.store.setItem(this.storeKey(patientId), JSON.stringify(labs));
        return labs;
    }
    async removeLab(patientId: string, lab: Lab): Promise<Lab[]> {
        let labs = await this.getLabs(patientId);
        labs = labs.filter(l => l.date.getTime() !== lab.date.getTime());
        this.store.setItem(this.storeKey(patientId), JSON.stringify(labs));
        return labs;
    }
}