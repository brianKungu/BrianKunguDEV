import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    value: [],
  },

  reducers: {
    setPortfolio: (state, action) => {
      state.value = action.payload;
    },

    clearPortfolio: (state) => {
      state.value = [];
    },
  },
});

// action creators are generated for each case reducer function
export const { setPortfolio, clearPortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
export const selectPortfolio = (state) => state.portfolio.value;
