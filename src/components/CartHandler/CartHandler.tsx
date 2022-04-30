import { cartActions } from '@src/store/modules/cart';
import { Product } from '@src/store/modules/products/products.types';
import { AppState } from '@src/store/store.types';
import { currency } from '@src/utils';
import { useDispatch, useSelector } from 'react-redux';
import DefaultButton from '../DefaultButton';
import * as Style from './CartHandler.style';

const CartHandler = () => {
  const dispatch = useDispatch();

  const cart: Array<Product> = useSelector(({ cart }: AppState) => cart);

  const handleRemove = (product: Product) => {
    dispatch(cartActions.removeProduct(product));
  };

  let total = 0;
  const cartMap = cart.map((product, index) => {
    const key = `product-${product}-${index}`;

    total += product.price;

    return (
      <Style.Item key={key}>
        <Style.ItemDetails>
          <Style.Thumb image={product.thumbnail} />
          <div>
            <p>{product.title}</p>
            <p>{currency({ value: product.price })}</p>
          </div>
        </Style.ItemDetails>
        <Style.Options>
          <DefaultButton label="Remover" onClick={() => handleRemove(product)} />
        </Style.Options>
      </Style.Item>
    );
  });

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <Style.CartHeader>
            <h2>{`${cart.length} produto(s)`}</h2>
          </Style.CartHeader>
          <Style.List>
            {cartMap}
          </Style.List>
          <Style.Total>
            <p>{`Total: ${currency({ value: total })}`}</p>
          </Style.Total>
        </div>
      ) : (
        <p>Nenhum produto no carrinho.</p>
      )}
    </div>
  );
};

export default CartHandler;
