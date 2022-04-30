import { OrderAction, OrderActionTypes, OrderState } from './order.types';

const initialState: OrderState = null;

const OrderReducer = (state = initialState, action: OrderAction) => {
  switch (action.type) {
    case OrderActionTypes.SET_ORDER: {
      const { order } = action.payload;
      return order;
    }
    default: {
      return state;
    }
  }
};

export default OrderReducer;
