import { Product } from '../products/products.types';

export enum OrderActionTypes {
  SET_ORDER = 'SET_ORDER',
}

export enum OrderStatus {
  APPROVED = 'APPROVED',
  RECUSED = 'RECUSED',
  PROCESSING = 'PROCESSING'
}

export type Order = {
  items: Array<Product>;
  paymentMethod: string;
  status?: OrderStatus;
}

export type OrderState = Order | null;

export type OrderAction = {
  type: OrderActionTypes,
  payload: {
    order?: Order;
  }
}

