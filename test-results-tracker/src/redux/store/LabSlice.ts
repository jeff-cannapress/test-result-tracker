import { createSlice } from "@reduxjs/toolkit";
import { TestResult, Lab, LabDataStore } from "../../services/Models";
import { ActionWithPayload } from "./ActionWithPayload";
import LocalStore from "../../services/LocalStore";
export type LabsState = { labs: Lab[], currentLab: Lab | null, processing: boolean };
const ApiSurface: LabDataStore = new LocalStore();
const initialState: LabsState = {
    labs: [],
    currentLab: null,
    processing: false

};

const isMatchedLab = (a: { date: Date }, b: { date: Date }) => a.date.getTime() === b.date.getTime();

const labSlice = createSlice({
    name: 'labs',
    initialState,
    reducers: {
        loadLabs(state: LabsState, action) {
            ApiSurface.getLabs()
                .then(labs => {
                    dispatch('loadLabsComplete', { labs });
                })
            return { labs: state.labs, currentLab: null, processing: true };
        },

        loadLabsComplete(state: LabsState, action: ActionWithPayload<{ labs: Lab[] }>) {
            return Object.assign(state, action.payload, {processing:false});
        },
        addLab(state: LabsState, action: ActionWithPayload<Lab>) {
            ApiSurface.saveLab(action.payload).then(labs=>{
                dispatch('loadLabsComplete',{labs});
            })
            return Object.assign(state, {labs:state.labs.concat([action.payload]), processing:true});            
        },
        removeLab(state: LabsState, action: ActionWithPayload<Lab>) {
            ApiSurface.removeLab(action.payload);
            return { labs: state.labs.filter(l => !isMatchedLab(l, action.payload)), currentLab: state.currentLab, processing: state.processing };
        },

        removeTestResult(state, action: ActionWithPayload<{ testResult: TestResult }>) {
            if (state.currentLab !== null) {
                state.currentLab.results = state.currentLab.results.filter(e => e.testId !== action.payload.testResult.testId);
            }

            return { labs: state.labs, currentLab: state.currentLab, processing: state.processing };
        },
        updateTestResult(state, action: ActionWithPayload<{ testResult: TestResult }>) {
            if (state.currentLab !== null) {
                const indexOfEntry = state.currentLab.results.map((v, i) => { return { value: v, index: i }; }).filter(x => x.value.testId === action.payload.testResult.testId).map(v => v.index)[0];
                if (indexOfEntry !== null) {
                    state.currentLab.results[indexOfEntry] = action.payload.testResult;
                }
                else {
                    state.currentLab.results.push(action.payload.testResult);
                }
            }
            return { labs: state.labs, currentLab: state.currentLab, processing: state.processing };
        }
    }
})
export const labActions = labSlice.actions;
export default labSlice;