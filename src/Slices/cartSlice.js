import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const restroValue = item.restaurantId;

      if (state.cartItems.length == 0) {
        state.cartItems.push(action.payload);
      }else{
        if (
          state.cartItems[state.cartItems.length - 1].restaurantId ===
          restroValue
        ) {
          state.cartItems.push(action.payload);
        }else{
          state.cartItems.length = 0;
          state.cartItems.push(item)
        }
      }

      
    },
    removeCartItem: (state, action) => {
      const { id } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
