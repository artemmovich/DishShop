import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: [],
      menuOpen: false,
   },
   reducers: {
      addItem: (state, action) => {
         const item = action.payload;
         const existingItem = state.items.find(i => i.id === item.id);
         if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
         } else {
            state.items.push({ ...item, quantity: 1 });
         }
      },
      removeItem: (state, action) => {
         const id = action.payload;
         state.items = state.items.filter(item => item.id !== id);
      },
      increaseQuantity: (state, action) => {
         const id = action.payload;
         const existingItem = state.items.find(i => i.id === id);
         if (existingItem) {
            existingItem.quantity += 1;
         }
      },
      decreaseQuantity: (state, action) => {
         const id = action.payload;
         const existingItem = state.items.find(i => i.id === id);
         if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
         } else {
            state.items = state.items.filter(item => item.id !== id);
         }
      },
      toggleMenu: (state) => {
         state.menuOpen = !state.menuOpen;
      },
      closeNav: (state) => {
         state.menuOpen = false;
      },
      clearCart: (state) => {
         state.items = [];
      },
   },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, toggleMenu, closeNav, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
