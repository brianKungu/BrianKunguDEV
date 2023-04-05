import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import navReducer from "./features/navSlice";

export default configureStore({
  reducer: {
    modal: modalReducer,
    nav: navReducer,
  },
});
