import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      // to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          img: newItem.img,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeToCart(state, action) {
      const newItem = action.payload;
      // to check if item is already available
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(
          (prod) => prod.id !== newItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= newItem.price;
      }
      state.totalQuantity--;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const actionCart = cartSlice.actions;
