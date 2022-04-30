import { cartActions } from '@src/store/modules/cart';
import { Dictionary } from '@src/store/modules/common/common.types';
import { orderActions } from '@src/store/modules/order';
import { Order } from '@src/store/modules/order/order.types';
import { AppState } from '@src/store/store.types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultButton from '../DefaultButton';
import * as Style from './CheckoutHandler.style';

const CheckoutHandler = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  const order: Order | null = useSelector(({ order }: AppState) => order as Order);

  useEffect(() => {
    if (!order) {
      return;
    }

    setOrderStatus(order.status as string);
    dispatch(cartActions.clear());
    dispatch(orderActions.setOrder(null));
  }, [dispatch, order]);

  const messages: Dictionary<string> = {
    'APPROVED': 'Compra efetuada com sucesso!',
    'RECUSED': 'Não foi possivel processar sua compra!',
    'PROCESSING': 'Estamos processando sua compra, avisaremos quando for concluído!',
  };

  const handleOnClick = () => {
    router.push('/');
  };

  return (
    <Style.Wrapper>
      <Style.Details>
        <p>{messages[orderStatus || 'PROCESSING']}</p>
      </Style.Details>
      <DefaultButton label="Comprar mais" onClick={handleOnClick} />
    </Style.Wrapper>
  );
};

export default CheckoutHandler;
