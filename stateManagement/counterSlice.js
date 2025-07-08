import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increament: (state, bayload) => {
      state.counter++;
    },
    decreament: (state, bayload) => {
      state--;
    },
  },
});

const counterreducer = counter.reducer;
export default counterreducer;
const { increament, decreament } = counter.actions;
export { increament, decreament };
