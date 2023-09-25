import { createSlice } from "@reduxjs/toolkit";
import { TestResult, Lab, IStoreLabData } from "../../services/Models";
import { ActionWithPayload } from "./ActionWithPayload";
import LocalStore from "../../services/LocalStore";
export type LabsState = { labs: Lab[], api: IStoreLabData };
const initialState: LabsState = {
    labs: [],
    api: new LocalStore()
};

const isMatchedLab = (a: { date: Date }, b: { date: Date }) => a.date.getTime() === b.date.getTime();

const labSlice = createSlice({
    name: 'labs',
    initialState,
    reducers: {
        loadLabs(state: LabsState, action) {
            return state;
        },
        loadLabsComplete(state: LabsState, action: ActionWithPayload<LabsState>) {
            return { labs: action.payload.labs, api: state.api };
        },
        addLab(state: LabsState, action: ActionWithPayload<Lab>) {
            return { labs: state.labs.concat(action.payload), api: state.api };
        },
        removeLab(state: LabsState, action: ActionWithPayload<Lab>) {
            state.api.removeLab(action.payload);
            return { api: state.api, labs: state.labs.filter(l => !isMatchedLab(l, action.payload)) };
        },
        addEntry(state, action: ActionWithPayload<{ labDate: Date, entry: TestResult }>) {
            const labId = { date: action.payload.labDate };
            const labToChange = state.labs.filter(l => isMatchedLab(labId, l))[0];
            labToChange.results.push(action.payload.entry);
            return { labs: state.labs, api: state.api };
        },
        removeEntry(state, action: ActionWithPayload<{ labDate: Date, entry: TestResult }>) {
            const labId = { date: action.payload.labDate };
            const labToChange = state.labs.filter(l => isMatchedLab(labId, l))[0];
            labToChange.results = labToChange.results.filter(e => e.testId !== action.payload.entry.testId);
            return { labs: state.labs, api: state.api };
        },
        updateEntry(state, action: ActionWithPayload<{ labDate: Date, entry: TestResult }>) {
            const labId = { date: action.payload.labDate };
            const labToChange = state.labs.filter(l => isMatchedLab(labId, l))[0];
            labToChange.results = labToChange.results.filter(e => e.testId !== action.payload.entry.testId).concat([action.payload.entry]);
            return { labs: state.labs, api: state.api };
        }
    }
})
export const labActions = labSlice.actions;
export default labSlice;