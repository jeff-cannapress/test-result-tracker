import { TestResult, Lab, LabDataStore } from "../services/Models";
import LocalStore from "../services/LocalStore";
export const ApiSurface: LabDataStore = new LocalStore();