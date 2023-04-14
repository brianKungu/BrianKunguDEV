import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import navReducer from "./features/navSlice";
import portfolioReducer from "./features/portfolioSlice";
export default configureStore({
  reducer: {
    modal: modalReducer,
    nav: navReducer,
    portfolio: portfolioReducer,
  },
});
