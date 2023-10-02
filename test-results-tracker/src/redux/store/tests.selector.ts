import { RootState } from "./state";

export const getTests = (state: RootState) => (state.tests);
export const getLoading = (state: RootState) => state.tests.loading;