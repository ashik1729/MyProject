import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index"; // Correct import statement

const store = configureStore({
  reducer: rootReducer,
});

export default store;
