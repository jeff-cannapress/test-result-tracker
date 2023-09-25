import { createSlice } from "@reduxjs/toolkit";
import { cannedCategories } from '../../services/LocalStore';
import { TestCategory } from "../../services/Models";
import { ActionWithPayload } from "./ActionWithPayload";
export type TestsState = { tests: TestCategory[] };
const initialState: TestsState = {
    tests: cannedCategories
}

const testSlice = createSlice({
    name: 'tests',
    initialState,
    reducers: {
        fetch(state: TestsState, action: ActionWithPayload<{ url: string }>) {
            //TODO, fire off an aysnc function which will fetch the categories from the server 
            return state;
        },
        update(state: TestsState, action: ActionWithPayload<TestCategory[]>) {
            return { tests: action.payload };
        }
    }
})
export const testActions = testSlice.actions;
export default testSlice;