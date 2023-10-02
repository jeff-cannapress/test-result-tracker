import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { Lab, TestCategory } from "../../services/Models";
import { AnyAction, AsyncThunkPayloadCreator, Dispatch, ThunkDispatch, ThunkMiddleware, createAsyncThunk, } from "@reduxjs/toolkit";
import { EqualityFn, useSelector } from "react-redux";
import { CheckFrequency } from "react-redux/es/hooks/useSelector";

export type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

export type TestsState =
    {
        tests: TestCategory[];
        loading: LoadingState
    };

export type LabsState = {
    labs: Lab[],
    patientId: string,
    currentLab: Lab | null,
    processing: boolean,
    loading: LoadingState
};
export type RootState = {
    tests: TestsState;
    labs: LabsState;
};
export type RootStore = ToolkitStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction>]>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction> & Dispatch<AnyAction>;
export type AppSelector<TResult> = (state: RootState) => TResult;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatch;
    // extra?: unknown;
    // rejectValue?: unknown;
    // serializedErrorType?: unknown;
    // pendingMeta?: unknown;
    // fulfilledMeta?: unknown;
    // rejectedMeta?: unknown;
}>();
interface UseSelectorOptions<Selected = unknown> {
    equalityFn?: EqualityFn<Selected>;
    stabilityCheck?: CheckFrequency;
    noopCheck?: CheckFrequency;
}
export interface UseAppSelector {
    <Selected = unknown>(selector: (state: RootState) => Selected, equalityFn?: EqualityFn<Selected>): Selected;
    <Selected = unknown>(selector: (state: RootState) => Selected, options?: UseSelectorOptions<Selected>): Selected;
}
