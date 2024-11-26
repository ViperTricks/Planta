import {createSlice} from '@reduxjs/toolkit';
import {login, register} from './API';

const initialState = {
  user: null, // thông tin user đăng nhập
  cart: [], // {_id, name, price, quantity, images}
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;

      if (!item || !item._id) {
        console.error('Invalid item payload', action.payload);
        return;
      }

      const index = state.cart.findIndex(
        e => e._id && e._id.toString() === item._id.toString(),
      );
      if (index === -1) {
        state.cart.push(item);
      } else {
        state.cart[index].quantity++;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;

      if (!itemId) {
        console.error('Invalid item ID', action.payload);
        return;
      }

      state.cart = state.cart.filter(
        item => item._id && item._id.toString() !== itemId.toString(),
      );
    },
    changeQuantity: (state, action) => {
      const {_id, change} = action.payload;

      if (!_id || change == null) {
        console.error('Invalid payload', action.payload);
        return;
      }

      const index = state.cart.findIndex(
        item => item._id && item._id.toString() === _id.toString(),
      );

      if (index !== -1) {
        const newQuantity = state.cart[index].quantity + change;

        if (newQuantity <= 0) {
          state.cart = state.cart.filter(
            item => item._id && item._id.toString() !== _id.toString(),
          );
        } else {
          state.cart[index].quantity = newQuantity;
        }
      }
    },
    logout: state => {
      state.user = null;
    },
    clearCart: state => {
      state.cart = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      console.log('...Pending');
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log('...fulfilled');
    });
    builder.addCase(login.rejected, state => {
      console.log('...Rejected');
      state.user = null;
    });
  },
});

export const {addItemToCart, logout, clearCart, removeItem, changeQuantity} =
  appSlice.actions;
export default appSlice.reducer;
