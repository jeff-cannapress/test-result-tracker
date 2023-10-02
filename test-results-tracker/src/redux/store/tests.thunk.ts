
import { ApiSurface } from "../ApiSurface";
import { createAppAsyncThunk } from "./state";

export const loadTestDefinitions = createAppAsyncThunk('test-definitions/load', async (patientId: string) => {
    const tests = await ApiSurface.getTestDefinitions();
    return { tests };
});
