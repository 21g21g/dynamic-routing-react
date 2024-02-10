import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    name: "",
    text: "",
  },

  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
  },
});
export const QuoteSliceActions = quoteSlice.actions;

export default quoteSlice;
