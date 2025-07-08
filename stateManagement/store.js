import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "../stateManagement/counterSlice";
const store = configureStore({
  reducer: { counter: counterreducer },
});

export default store;
