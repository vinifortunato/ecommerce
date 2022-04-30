import { cartReducer } from './cart';
import { combineReducers } from 'redux';
import { commonReducer } from './common';
import { orderReducer } from './order';
import { productsReducer } from './products';

const reducers = {
  cart: cartReducer,
  common: commonReducer,
  order: orderReducer,
  products: productsReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
