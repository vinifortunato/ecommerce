import { CartState } from './modules/cart/cart.types';
import { CommonState } from './modules/common/common.types';
import { OrderState } from './modules/order/order.types';
import { ProductsState } from './modules/products/products.types';

export type AppState = {
  cart: CartState,
  common: CommonState,
  order: OrderState,
  products: ProductsState
}
