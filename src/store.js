import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./store/appSlice";

const store = configureStore({
  reducer: {
    user: appReducer,
  },
});

export default store;
