import { orderActions } from '@src/store/modules/order';
import { Order, OrderStatus } from '@src/store/modules/order/order.types';
import { Product } from '@src/store/modules/products/products.types';
import { AppState } from '@src/store/store.types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultButton from '../DefaultButton';
import * as Style from './PaymentHandler.style';

const PaymentHandler = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [method, setMethod] = useState('boleto');

  const cart: Array<Product> = useSelector(({ cart }: AppState) => cart);
  const order: Order | null = useSelector(({ order }: AppState) => order as Order);

  const handleOnChange = (event: any) => {
    setMethod(event.target.value);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    const order: Order = {
      items: cart,
      paymentMethod: method,
      status: OrderStatus.APPROVED
    };

    // TODO: Call API to process

    dispatch(orderActions.setOrder(order));
  };

  useEffect(() => {
    if (!order) {
      return;
    }

    router.push('checkout');
  }, [router, order]);

  return (
    <Style.Wrapper>
      <Style.Title>Pagamento</Style.Title>
      <Style.Methods onChange={handleOnChange}>
        <option value="boleto">Boleto</option>
        <option value="cc">Cartão de crédito</option>
      </Style.Methods>
      <Style.Details>
        {method === 'boleto' && (
          <p>1x no boleto</p>
        )}
        {method === 'cc' && (
          <p>1x no cartão de crédito</p>
        )}
      </Style.Details>
      <DefaultButton label="Checkout" onClick={handleCheckout} disabled={cart.length === 0} />
    </Style.Wrapper>
  );
};

export default PaymentHandler;
