import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addLab, loadPatient } from "./labs.thunk";
import { LabsState } from './state';

const labSlice = createSlice({
    name: 'labs',
    initialState: {
        labs: [],
        patientId: '',
        currentLab: null,
        processing: false,
        loading: 'idle'
    } as LabsState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadPatient.fulfilled, (state, action) => {
            state.labs = action.payload.labs;
            state.patientId = action.payload.patientId;
            state.loading = 'idle';
        });
        builder.addCase(loadPatient.pending, (state, action) => {
            state.labs = [];
            state.loading = 'pending';
        })
        builder.addCase(loadPatient.rejected, (state, action) => {
            state.labs = [];
            state.loading = 'failed';
        });
        builder.addCase(addLab.pending, (state,action)=>{
            state.loading = 'pending';
        });
        builder.addCase(addLab.rejected,(state,action)=>{
            state.loading = 'failed';
        });
        builder.addCase(addLab.fulfilled,(state,action)=>{
            state.labs = action.payload.labs;
            state.loading = 'idle';
        })        

    }
})
export const labActions = labSlice.actions;
export default labSlice;