import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      items: JSON.parse(localStorage.getItem('cart')) || [],
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
            localStorage.setItem('cart', JSON.stringify(state.items))
         }
      },
      removeItem: (state, action) => {
         const id = action.payload;
         state.items = state.items.filter(item => item.id !== id);
         localStorage.setItem('cart', JSON.stringify(state.items));
      },
      increaseQuantity: (state, action) => {
         const id = action.payload;
         const existingItem = state.items.find(i => i.id === id);
         if (existingItem) {
            existingItem.quantity += 1;
            localStorage.setItem('cart', JSON.stringify(state.items));
         }
      },
      decreaseQuantity: (state, action) => {
         const id = action.payload;
         const existingItem = state.items.find(i => i.id === id);
         if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
            localStorage.setItem('cart', JSON.stringify(state.items));
         } else {
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(state.items));
         }
      },
    
      clearCart: (state) => {
         state.items = [];
         localStorage.setItem('cart', JSON.stringify(state.items));
      },
   },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity,  clearCart } = cartSlice.actions;
export default cartSlice.reducer;
