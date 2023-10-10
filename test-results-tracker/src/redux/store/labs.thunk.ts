
import { Lab } from "../../services/Models";
import { ApiSurface } from "../ApiSurface";

import { getAllLabs, getCurrentPatientId } from './labs.selector';
import { createAppAsyncThunk } from "./state";
export const loadPatient = createAppAsyncThunk('labs/load', async (patientId: string) => {
    const labs = await ApiSurface.getLabs(patientId);
    return { patientId, labs };
});
export const addLab = createAppAsyncThunk('labs/add', async (lab: Lab, thunkApi) => {
    const patientId = getCurrentPatientId(thunkApi.getState());
    await ApiSurface.saveLab(patientId, lab);
    const labs = await ApiSurface.getLabs(patientId);
    return { labs };
});
export const selectLab = createAppAsyncThunk('labs/select', async (labDate: Date, thunkApi) => {
    const currentLab = getAllLabs(thunkApi.getState()).filter(l => l.date.getTime() === labDate.getTime())[0] ?? null;
    return { currentLab }
})