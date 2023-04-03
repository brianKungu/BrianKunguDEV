import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./features/modalSlice";

export default configureStore({
  // reducer function specifies how a state gets updated
  reducer: {
    modal:modalSlice
  },
});
