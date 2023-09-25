import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./TestsSlice";
import labSlice from "./LabSlice";


const store = configureStore({
  reducer: {
    [testSlice.name]: testSlice.reducer,
    [labSlice.name]: labSlice.reducer,
  },
});
export default store;