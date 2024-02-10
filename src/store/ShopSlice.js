import { createSlice } from "@reduxjs/toolkit";

const shopReducer = createSlice({
  name: "shop",
  initialState: {
    listItems: [],
    count: 0,
    isClicked: false,
  },
  reducers: {
    addTocart(state, action) {
      const newItem = action.payload;
      const existingItem = state.listItems.find(
        (list) => list.id === newItem.id
      );
      if (existingItem) {
        state.count++;
      } else {
        state.listItems.push({
          id: newItem.id,
          productImage: newItem.productImage,
          productName: newItem.productName,
          price: newItem.price,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.listItems.find((item) => item.id === id);
      if (existingItem.count === 1) {
        state.listItems = state.listItems.filter((item) => item.id !== id);
      } else {
        existingItem.count--;
      }
    },
    setisClicked(state) {
      state.isClicked = true;
    },
  },
});

export const shopSliceActions = shopReducer.actions;
export default shopReducer;
