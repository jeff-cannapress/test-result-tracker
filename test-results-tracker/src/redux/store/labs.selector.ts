import { RootState } from "./state";

export const getLabsState = (state: RootState) => (state.labs);
export const getCurrentPatientId = (state: RootState) => getLabsState(state).patientId;
export const getCurrentLab = (state: RootState) => getLabsState(state).currentLab;