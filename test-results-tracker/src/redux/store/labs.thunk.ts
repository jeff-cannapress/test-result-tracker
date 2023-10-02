
import { Lab } from "../../services/Models";
import { ApiSurface } from "../ApiSurface";

import { getCurrentPatientId } from './labs.selector';
import { createAppAsyncThunk } from "./state";
export const loadPatient = createAppAsyncThunk('labs/load', async (patientId: string) => {
    const labs = await ApiSurface.getLabs(patientId);
    return { patientId, labs };
});
export const addLab = createAppAsyncThunk('labs/add', async (lab: Lab, thunkApi) => {
    const labs = await ApiSurface.saveLab(getCurrentPatientId(thunkApi.getState()), lab);
    return { labs };
})