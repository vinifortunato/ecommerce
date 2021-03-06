import { CartAction, CartActionTypes, CartState } from './cart.types';

const initialState: CartState = [];

const CartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART: {
      const { product } = action.payload;
      return [...state, product];
    }
    case CartActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const { product } = action.payload;
      if (!product) {
        return state;
      }
      return state.filter((element) => element.id !== product.id);
    }
    case CartActionTypes.CLEAR_CART: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default CartReducer;
