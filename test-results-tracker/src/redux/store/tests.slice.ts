import { createSlice } from '@reduxjs/toolkit';

import { loadTestDefinitions } from './tests.thunk';
import { TestsState } from './state';

const testSlice = createSlice({
    name: 'tests',
    initialState: {
        tests: [],
        loading: 'idle'
    } as TestsState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loadTestDefinitions.fulfilled, (state, action) => {
            state.tests = action.payload.tests;
            state.loading = 'idle';
            console.log(`loadTestDefinitions.fulfilled`, state.tests);
        });
        builder.addCase(loadTestDefinitions.pending, (state, action) => {
            state.tests = [];
            state.loading = 'pending';
        });
        builder.addCase(loadTestDefinitions.rejected, (state, action) => {
            state.tests = [];
            state.loading = 'failed';
        });


    }
})
export const testActions = testSlice.actions;
export default testSlice;