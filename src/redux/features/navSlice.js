import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    value: false,
  },

  reducers: {
    openNav: (state) => {
      state.value = true;
    },

    closeNav: (state) => {
      state.value = false;
    },
  },
});

export const { openNav, closeNav } = navSlice.actions;
export default navSlice.reducer;
