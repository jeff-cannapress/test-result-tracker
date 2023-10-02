import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./tests.slice";
import labSlice from "./labs.slice";
import { RootStore } from "./state";

const store: RootStore = configureStore({
  reducer: {
    [testSlice.name]: testSlice.reducer,
    [labSlice.name]: labSlice.reducer,
  },
});
export default store;




