import { Order, OrderActionTypes } from './order.types';

const setOrder = (order: Order | null) => {
  return {
    type: OrderActionTypes.SET_ORDER,
    payload: {
      order
    }
  };
};

const orderActions = {
  setOrder
};

export default orderActions;
