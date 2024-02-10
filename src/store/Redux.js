import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./ShopSlice";
import quoteSlice from "./QuoteSlice";

const store = configureStore({
  reducer: {
    shop: shopReducer.reducer,
    quote: quoteSlice.reducer,
  },
});
export default store;
