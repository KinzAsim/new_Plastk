import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isLoading: false,
};

export const commonReducer = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleLoader: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { toggleLoader, } = commonReducer.actions;

export default commonReducer.reducer;
